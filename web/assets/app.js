/* stagekit - workbench
   Runs the real stage bodies (mirrored into assets/stages.js) in the browser.
   No dependencies. Isolated stage compilation, per-step preview, catalog,
   command palette, theme, deep links. */
(function () {
  'use strict';

  /* =========================================================
     stage loading (compile each body in isolation)
     ========================================================= */
  var RAW = window.STAGEKIT_STAGES || [];
  var STAGES = RAW.map(function (s) {
    var fn = null;
    var err = null;
    try { fn = (0, eval)('(' + s.run + ')'); }
    catch (e) { err = (e && e.message) ? e.message : String(e); }
    return {
      id: s.id,
      name: s.name,
      description: s.description,
      category: s.category || 'Other',
      run: fn,
      runError: err,
    };
  });

  var byId = new Map();
  var byName = new Map();
  STAGES.forEach(function (s) {
    byId.set(s.id, s);
    if (!byName.has(s.name)) byName.set(s.name, s);
    s._q = (s.id + ' ' + s.name + ' ' + s.description + ' ' + s.category).toLowerCase();
    s._n = s.name.toLowerCase();
  });

  var broken = STAGES.filter(function (s) { return !s.run; }).length;

  function searchStages(query, limit) {
    var q = String(query || '').trim().toLowerCase();
    var max = limit || 8;
    var out = [];
    var i;
    if (!q) {
      for (i = 0; i < STAGES.length && out.length < max; i++) out.push(STAGES[i]);
      return out;
    }
    var scored = [];
    for (i = 0; i < STAGES.length; i++) {
      var s = STAGES[i];
      if (s._q.indexOf(q) === -1) continue;
      var pos = s._n.indexOf(q);
      var score = pos === 0 ? 0 : (pos > 0 ? 1 : (s.id.indexOf(q) === 0 ? 2 : 3));
      scored.push([score, i, s]);
    }
    scored.sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    for (i = 0; i < scored.length && i < max; i++) out.push(scored[i][2]);
    return out;
  }

  function countMatches(q) {
    q = String(q || '').trim().toLowerCase();
    if (!q) return STAGES.length;
    var n = 0;
    for (var i = 0; i < STAGES.length; i++) if (STAGES[i]._q.indexOf(q) !== -1) n++;
    return n;
  }

  /* =========================================================
     tiny DOM helpers
     ========================================================= */
  function $(sel) { return document.querySelector(sel); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function icon(paths, size) {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width', size || 16);
    svg.setAttribute('height', size || 16);
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('aria-hidden', 'true');
    paths.forEach(function (d) {
      var p = document.createElementNS(ns, 'path');
      p.setAttribute('d', d);
      if (d.indexOf('circle') === -1) svg.appendChild(p);
    });
    return svg;
  }

  var toastEl = $('#toast');
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 1800);
  }

  function copyText(text, btn, label) {
    var done = function () {
      toast(label || 'Copied to clipboard');
      if (!btn) return;
      var prev = btn.textContent;
      btn.textContent = 'copied';
      setTimeout(function () { btn.textContent = prev; }, 1200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    var ta = el('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { toast('Copy failed'); }
    document.body.removeChild(ta);
  }

  /* =========================================================
     theme
     ========================================================= */
  var THEME_KEY = 'stagekit-theme';
  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) { /* ignore */ }
  }
  (function initTheme() {
    // Dark-first: the design is built for dark; light is opt-in via the toggle.
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
    setTheme(saved === 'light' ? 'light' : 'dark');
  })();
  var themeBtn = $('#theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      setTheme(cur === 'light' ? 'dark' : 'light');
    });
  }

  /* =========================================================
     pipeline model + execution
     ========================================================= */
  var pipeline = []; // { stage, enabled }

  function runOne(stage, value) {
    if (!stage.run) throw new Error('stage failed to compile' + (stage.runError ? ': ' + stage.runError : ''));
    return stage.run(value);
  }

  function runPipeline(value) {
    var cur = value;
    var steps = [];
    for (var i = 0; i < pipeline.length; i++) {
      var item = pipeline[i];
      if (!item.enabled) { steps.push({ item: item, skipped: true }); continue; }
      try {
        var out = runOne(item.stage, cur);
        steps.push({ item: item, output: out, input: cur });
        cur = out;
      } catch (e) {
        steps.push({ item: item, error: (e && e.message) ? e.message : String(e), input: cur });
      }
    }
    return { value: cur, steps: steps };
  }

  function addStage(stage, opts) {
    if (!stage) return;
    pipeline.push({ stage: stage, enabled: true });
    render();
    if (!opts || !opts.silent) toast('Added ' + stage.name);
  }

  /* =========================================================
     workbench render
     ========================================================= */
  var inputEl = $('#input');
  var pipelineEl = $('#pipeline');
  var emptyHint = $('#pipeline-empty');
  var outputEl = $('#output');
  var statusEl = $('#output-status');
  var pipeCountEl = $('#pipe-count');

  var dragFrom = -1;

  function render() {
    renderPipeline();
    renderOutput();
    renderCode();
    updateUrl();
  }

  function renderPipeline() {
    pipelineEl.textContent = '';
    pipeline.forEach(function (item, i) {
      pipelineEl.appendChild(pipelineItem(item, i));
    });
    emptyHint.hidden = pipeline.length > 0;
    if (pipeCountEl) pipeCountEl.textContent = pipeline.length + (pipeline.length === 1 ? ' stage' : ' stages');
  }

  function pipelineItem(item, i) {
    var s = item.stage;
    var li = el('li', 'pl-item' + (item.enabled ? '' : ' off'));
    li.tabIndex = 0;
    li.draggable = true;
    li.dataset.index = String(i);
    li.setAttribute('aria-label', 'Stage ' + (i + 1) + ': ' + s.name);

    var grip = el('span', 'pl-grip');
    grip.appendChild(icon(['M9 5h.01M9 12h.01M9 19h.01M15 5h.01M15 12h.01M15 19h.01'], 15));
    grip.setAttribute('aria-hidden', 'true');

    var idx = el('span', 'pl-idx', String(i + 1));

    var main = el('span', 'pl-main');
    main.appendChild(el('span', 'pl-name', s.name));
    main.appendChild(document.createTextNode(' '));
    main.appendChild(el('span', 'pl-id', s.id));

    var actions = el('span', 'pl-actions');

    var toggle = el('button', 'pl-btn');
    toggle.type = 'button';
    toggle.setAttribute('aria-pressed', String(item.enabled));
    toggle.title = item.enabled ? 'Disable stage' : 'Enable stage';
    toggle.setAttribute('aria-label', (item.enabled ? 'Disable ' : 'Enable ') + s.name);
    toggle.appendChild(icon(item.enabled ? ['M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z', 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'] : ['M3 3l18 18', 'M10.6 5.1A11 11 0 0 1 12 5c7 0 11 7 11 7a17 17 0 0 1-3.4 4', 'M6.6 6.6A17 17 0 0 0 1 12s4 7 11 7a11 11 0 0 0 5.4-1.4'], 15));
    toggle.addEventListener('click', function () {
      item.enabled = !item.enabled;
      render();
    });

    var rm = el('button', 'pl-btn rm');
    rm.type = 'button';
    rm.title = 'Remove stage';
    rm.setAttribute('aria-label', 'Remove ' + s.name);
    rm.appendChild(icon(['M18 6 6 18', 'm6 6 12 12'], 15));
    rm.addEventListener('click', function () {
      pipeline.splice(i, 1);
      render();
    });

    actions.appendChild(toggle);
    actions.appendChild(rm);
    li.appendChild(grip);
    li.appendChild(idx);
    li.appendChild(main);
    li.appendChild(actions);

    li.addEventListener('keydown', function (e) {
      if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault();
        move(i, e.key === 'ArrowUp' ? -1 : 1);
      } else if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        pipeline.splice(i, 1);
        render();
        focusItem(Math.min(i, pipeline.length - 1));
      }
    });

    li.addEventListener('dragstart', function (e) {
      dragFrom = i;
      li.classList.add('dragging');
      try { e.dataTransfer.setData('text/plain', String(i)); } catch (err) { /* ignore */ }
      e.dataTransfer.effectAllowed = 'move';
    });
    li.addEventListener('dragend', function () {
      dragFrom = -1;
      li.classList.remove('dragging');
      Array.prototype.forEach.call(pipelineEl.children, function (c) {
        c.classList.remove('drop-before', 'drop-after');
      });
    });
    li.addEventListener('dragover', function (e) {
      if (dragFrom === -1) return;
      e.preventDefault();
      var r = li.getBoundingClientRect();
      var before = (e.clientY - r.top) < r.height / 2;
      li.classList.toggle('drop-before', before);
      li.classList.toggle('drop-after', !before);
    });
    li.addEventListener('dragleave', function () {
      li.classList.remove('drop-before', 'drop-after');
    });
    li.addEventListener('drop', function (e) {
      e.preventDefault();
      if (dragFrom === -1 || dragFrom === i) return;
      var r = li.getBoundingClientRect();
      var before = (e.clientY - r.top) < r.height / 2;
      var to = before ? i : i + 1;
      var moved = pipeline.splice(dragFrom, 1)[0];
      if (dragFrom < to) to -= 1;
      pipeline.splice(to, 0, moved);
      dragFrom = -1;
      render();
      focusItem(to);
    });

    return li;
  }

  function move(i, delta) {
    var j = i + delta;
    if (j < 0 || j >= pipeline.length) return;
    var tmp = pipeline[i];
    pipeline[i] = pipeline[j];
    pipeline[j] = tmp;
    render();
    focusItem(j);
  }
  function focusItem(i) {
    if (i < 0 || i >= pipeline.length) return;
    var node = pipelineEl.children[i];
    if (node) node.focus();
  }

  function renderOutput() {
    var result = runPipeline(inputEl.value);
    var firstError = null;
    for (var i = 0; i < result.steps.length; i++) if (result.steps[i].error) { firstError = result.steps[i]; break; }

    outputEl.textContent = firstError ? ('error in ' + firstError.item.stage.id + ': ' + firstError.error) : result.value;
    outputEl.style.color = firstError ? 'var(--danger)' : '';
    statusEl.textContent = pipeline.length ? (countEnabled() + ' of ' + pipeline.length + ' active') : '';

    // per-step previews
    var nodes = pipelineEl.children;
    for (var k = 0; k < result.steps.length && k < nodes.length; k++) {
      var step = result.steps[k];
      if (step.skipped) continue;
      var pv = el('p', 'pl-preview' + (step.error ? ' err' : ''));
      pv.textContent = step.error ? ('! ' + step.error) : ('\u2192 ' + clip(step.output));
      nodes[k].appendChild(pv);
    }
  }

  function clip(v) {
    var s = String(v);
    return s.length > 120 ? s.slice(0, 117) + '\u2026' : s;
  }
  function countEnabled() {
    var n = 0;
    pipeline.forEach(function (p) { if (p.enabled) n++; });
    return n;
  }

  var renderTimer = null;
  function scheduleRender() {
    clearTimeout(renderTimer);
    renderTimer = setTimeout(render, 90);
  }

  if (inputEl) inputEl.addEventListener('input', scheduleRender);
  var clearBtn = $('#clear');
  if (clearBtn) clearBtn.addEventListener('click', function () { pipeline = []; render(); });

  /* =========================================================
     code generation + tabs
     ========================================================= */
  function nodeCode() {
    var lines = ["const { registry, createPipeline } = require('stagekit-js');", '', 'const pipe = createPipeline(['];
    if (pipeline.length === 0) {
      lines.push('  // add stages to build a pipeline');
    } else {
      pipeline.forEach(function (p) {
        lines.push("  registry.get('" + p.stage.id + "'), // " + p.stage.name + (p.enabled ? '' : ' (disabled)'));
      });
    }
    lines.push(']);', '');
    lines.push('pipe(' + JSON.stringify(inputEl.value) + ');');
    return lines.join('\n');
  }
  function shellCode() {
    if (pipeline.length === 0) return '# add stages to build a pipeline';
    var ids = pipeline.filter(function (p) { return p.enabled; }).map(function (p) { return p.stage.id; });
    if (ids.length === 0) return '# all stages are disabled';
    var input = inputEl.value.replace(/'/g, "'\\''");
    return "echo '" + input + "' | stagekit run " + ids.join(' ');
  }
  function specCode() {
    return JSON.stringify({
      version: 1,
      stages: pipeline.map(function (p) {
        return { id: p.stage.id, name: p.stage.name, enabled: p.enabled };
      }),
    }, null, 2);
  }

  var codeNode = $('#code-node');
  var codeCli = $('#code-cli');
  var codeSpec = $('#code-spec');
  function renderCode() {
    if (codeNode) codeNode.textContent = nodeCode();
    if (codeCli) codeCli.textContent = shellCode();
    if (codeSpec) codeSpec.textContent = specCode();
  }

  var tabs = [
    { tab: '#tab-node', panel: '#panel-node' },
    { tab: '#tab-cli', panel: '#panel-cli' },
    { tab: '#tab-spec', panel: '#panel-spec' },
  ];
  function selectTab(which) {
    tabs.forEach(function (t, i) {
      var tb = $(t.tab);
      var pn = $(t.panel);
      if (!tb || !pn) return;
      var on = i === which;
      tb.setAttribute('aria-selected', String(on));
      pn.hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    var tb = $(t.tab);
    if (tb) tb.addEventListener('click', function () { selectTab(i); });
    if (tb) tb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') selectTab((i + 1) % tabs.length);
      if (e.key === 'ArrowLeft') selectTab((i - 1 + tabs.length) % tabs.length);
    });
  });
  var copyCode = $('#copy-code');
  if (copyCode) copyCode.addEventListener('click', function () {
    var active = tabs.find(function (t) { var tb = $(t.tab); return tb && tb.getAttribute('aria-selected') === 'true'; });
    var map = { '#tab-node': codeNode, '#tab-cli': codeCli, '#tab-spec': codeSpec };
    var node = active ? map[active.tab] : codeNode;
    copyText(node ? node.textContent : '', copyCode, 'Code copied');
  });

  /* =========================================================
     chips (quick-add)
     ========================================================= */
  var CHIPS = [
    'Uppercase', 'Lowercase', 'Slug with "-"', 'Base64 encode', 'Reverse characters',
    'Caesar shift +1', 'Camel case', 'Title case', 'Trim lines', 'HTML escape',
  ];
  var chipsEl = $('#chips');
  if (chipsEl) {
    CHIPS.forEach(function (name) {
      var s = byName.get(name);
      if (!s) return;
      var b = el('button', 'chip', name);
      b.type = 'button';
      b.addEventListener('click', function () { addStage(s); });
      chipsEl.appendChild(b);
    });
  }

  /* =========================================================
     search combobox (workbench)
     ========================================================= */
  var searchEl = $('#stage-search');
  var suggEl = $('#suggestions');
  var activeSuggestion = -1;
  var suggestionData = [];

  function hideSuggest() {
    if (!suggEl) return;
    suggEl.hidden = true;
    suggEl.textContent = '';
    activeSuggestion = -1;
    suggestionData = [];
    if (searchEl) searchEl.setAttribute('aria-expanded', 'false');
  }

  function showSuggest(q) {
    if (!suggEl || !searchEl) return;
    var matches = searchStages(q, 9);
    suggEl.textContent = '';
    suggestionData = matches;
    activeSuggestion = -1;
    if (q && matches.length === 0) {
      var none = el('li', 'empty', 'no matches');
      suggEl.appendChild(none);
      suggEl.hidden = false;
      searchEl.setAttribute('aria-expanded', 'true');
      return;
    }
    matches.forEach(function (s, i) {
      var li = el('li');
      li.dataset.index = String(i);
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      li.appendChild(el('span', 's-name', s.name));
      li.appendChild(el('span', 's-id', s.id));
      li.addEventListener('mousedown', function (e) {
        e.preventDefault();
        addStage(s);
        searchEl.value = '';
        hideSuggest();
      });
      suggEl.appendChild(li);
    });
    suggEl.hidden = false;
    searchEl.setAttribute('aria-expanded', 'true');
  }

  function highlight(dir) {
    if (!suggEl) return;
    var items = Array.prototype.slice.call(suggEl.querySelectorAll('li[data-index]'));
    if (!items.length) return;
    activeSuggestion = (activeSuggestion + dir + items.length) % items.length;
    items.forEach(function (li, i) {
      var on = i === activeSuggestion;
      li.classList.toggle('active', on);
      li.setAttribute('aria-selected', String(on));
    });
  }

  if (searchEl) {
    searchEl.addEventListener('input', function () { showSuggest(searchEl.value.trim()); });
    searchEl.addEventListener('focus', function () { if (searchEl.value.trim()) showSuggest(searchEl.value.trim()); });
    searchEl.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); highlight(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(-1); }
      else if (e.key === 'Enter') {
        var pick = suggestionData[activeSuggestion] || suggestionData[0];
        if (pick) { e.preventDefault(); addStage(pick); searchEl.value = ''; hideSuggest(); }
      } else if (e.key === 'Escape') { hideSuggest(); }
    });
  }
  document.addEventListener('click', function (e) {
    if (searchEl && !e.target.closest('.search')) hideSuggest();
  });

  /* =========================================================
     hero readout + marquee
     ========================================================= */
  var HERO_STAGES = ['Slug with "-"', 'Uppercase', 'Base64 encode', 'Reverse characters', 'Caesar shift +1', 'Camel case', 'HTML escape', 'Mirror'];
  var HERO_INPUTS = ['Hello World', 'my post title', 'secret note', 'abc123', 'StageKit', 'one two three'];
  function renderAuto() {
    var stage = byName.get(HERO_STAGES[Math.floor(Math.random() * HERO_STAGES.length)]);
    var value = HERO_INPUTS[Math.floor(Math.random() * HERO_INPUTS.length)];
    if (!stage) return;
    $('#auto-in').textContent = JSON.stringify(value);
    $('#auto-stage').textContent = stage.name;
    $('#auto-id').textContent = stage.id;
    $('#auto-count').textContent = STAGES.length.toLocaleString() + ' stages';
    var out;
    try { out = runOne(stage, value); } catch (e) { out = '(error)'; }
    $('#auto-out').textContent = JSON.stringify(out);
  }

  function renderMarquee() {
    var track = $('#marquee-track');
    if (!track) return;
    var picks = ['Uppercase', 'Lowercase', 'Camel case', 'Snake case', 'Kebab case', 'Title case',
      'Slug with "-"', 'Whitespace to "-"', 'Base64 encode', 'Hex encode', 'URI encode',
      'HTML escape', 'Caesar shift +1', 'Atbash', 'Reverse characters', 'Reverse lines',
      'Sort lines', 'Unique lines', 'Trim lines', 'Number lines', 'Mask all but last 4',
      'Truncate to 20', 'Pad start to 12 with "="', 'Wrap in []', 'Mirror'];
    var frag = document.createDocumentFragment();
    function addAll() {
      picks.forEach(function (name) {
        var s = byName.get(name);
        if (!s) return;
        var span = el('span');
        span.appendChild(el('b', null, name));
        span.appendChild(document.createTextNode(' '));
        span.appendChild(el('span', 'a', s.id));
        frag.appendChild(span);
      });
    }
    addAll();
    addAll();
    track.textContent = '';
    track.appendChild(frag);
  }

  /* =========================================================
     registry stats + category filters
     ========================================================= */
  var categoryCounts = {};
  STAGES.forEach(function (s) { categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1; });
  var CATS = Object.keys(categoryCounts).sort(function (a, b) {
    return categoryCounts[b] - categoryCounts[a] || a.localeCompare(b);
  });

  function renderStats() {
    var heroCount = $('#hero-count');
    if (heroCount) heroCount.textContent = STAGES.length.toLocaleString();
    var stageCount = $('#stage-count');
    if (stageCount) stageCount.textContent = STAGES.length.toLocaleString();
    var catCount = $('#cat-count');
    if (catCount) catCount.textContent = String(CATS.length);

    var box = $('#categories');
    if (!box) return;
    var max = categoryCounts[CATS[0]] || 1;
    box.textContent = '';
    CATS.forEach(function (name) {
      var row = el('div', 'bar-row');
      var nm = el('span', 'bar-name', name);
      var track = el('span', 'bar-track');
      var fill = el('span', 'bar-fill');
      fill.dataset.width = Math.max(3, Math.round((categoryCounts[name] / max) * 100)) + '%';
      track.appendChild(fill);
      var n = el('span', 'bar-n', categoryCounts[name].toLocaleString());
      row.appendChild(nm);
      row.appendChild(track);
      row.appendChild(n);
      box.appendChild(row);
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          Array.prototype.forEach.call(box.querySelectorAll('.bar-fill'), function (f, i) {
            setTimeout(function () { f.style.width = f.dataset.width; }, i * 40);
          });
          io.disconnect();
        });
      }, { threshold: 0.2 });
      io.observe(box);
    } else {
      Array.prototype.forEach.call(box.querySelectorAll('.bar-fill'), function (f) { f.style.width = f.dataset.width; });
    }
  }

  /* =========================================================
     catalog browser
     ========================================================= */
  var PAGE = 48;
  var catalogState = { query: '', category: 'All', shown: PAGE };
  var gridEl = $('#catalog-grid');
  var catalogMeta = $('#catalog-meta');
  var catalogEmpty = $('#catalog-empty');
  var catalogMore = $('#catalog-more');

  function catalogMatches() {
    var q = catalogState.query.trim().toLowerCase();
    var cat = catalogState.category;
    var out = [];
    for (var i = 0; i < STAGES.length; i++) {
      var s = STAGES[i];
      if (cat !== 'All' && s.category !== cat) continue;
      if (q && s._q.indexOf(q) === -1) continue;
      out.push(s);
    }
    return out;
  }

  function renderFilters() {
    var box = $('#filters');
    if (!box) return;
    box.textContent = '';
    var all = ['All'].concat(CATS);
    all.forEach(function (name) {
      var b = el('button', 'chip', name === 'All' ? 'all' : name);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(catalogState.category === name));
      b.addEventListener('click', function () {
        catalogState.category = name;
        catalogState.shown = PAGE;
        renderFilters();
        renderCatalog();
      });
      box.appendChild(b);
    });
  }

  function renderCatalog() {
    if (!gridEl) return;
    var matches = catalogMatches();
    var slice = matches.slice(0, catalogState.shown);
    gridEl.textContent = '';
    slice.forEach(function (s) {
      gridEl.appendChild(stageCard(s));
    });
    if (catalogMeta) {
      catalogMeta.textContent = matches.length.toLocaleString() + ' stage' + (matches.length === 1 ? '' : 's') +
        (catalogState.query ? ' matching \u201c' + catalogState.query + '\u201d' : '');
    }
    if (catalogEmpty) catalogEmpty.hidden = matches.length !== 0;
    if (catalogMore) {
      catalogMore.hidden = catalogState.shown >= matches.length;
      catalogMore.textContent = 'Load more (' + Math.max(0, matches.length - catalogState.shown).toLocaleString() + ' left)';
    }
  }

  function stageCard(s) {
    var card = el('button', 'stage-card');
    card.type = 'button';
    card.setAttribute('aria-label', 'Add ' + s.name + ' (' + s.id + ') to pipeline');

    var top = el('span', 'sc-top');
    top.appendChild(el('span', 'sc-name', s.name));
    top.appendChild(el('span', 'sc-id', s.id));
    card.appendChild(top);
    card.appendChild(el('span', 'sc-desc', s.description));

    var foot = el('span', 'sc-foot');
    foot.appendChild(el('span', 'sc-cat', s.category));
    var add = el('span', 'sc-add', '+ add');
    foot.appendChild(add);
    card.appendChild(foot);

    card.addEventListener('click', function () {
      addStage(s);
      var wb = document.getElementById('workbench');
      if (wb) wb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return card;
  }

  var catalogSearch = $('#catalog-search');
  if (catalogSearch) {
    catalogSearch.addEventListener('input', function () {
      catalogState.query = catalogSearch.value;
      catalogState.shown = PAGE;
      renderCatalog();
    });
  }
  if (catalogMore) catalogMore.addEventListener('click', function () {
    catalogState.shown += PAGE;
    renderCatalog();
  });

  /* =========================================================
     FAQ
     ========================================================= */
  var FAQ = [
    ['What is StageKit, in one sentence?', 'A library of ' + STAGES.length.toLocaleString() + ' small, pure string transformations that you snap together into a pipeline.'],
    ['Why are stages numbered instead of named?', 'Every stage has a unique <code>id</code> (mod-0042) and a unique human <code>name</code> (Caesar shift +1). The id is the stable key - it never changes and is never reused - so it is safe to store in configs and scripts. The name is meant for people and may be reworded between releases.'],
    ['Do I have to memorise ids?', 'No. Use <code>registry.search(...)</code> or <code>registry.findByPrefix(...)</code>. Ids are only needed when you want to pin an exact stage in code or documentation.'],
    ['What id do I give a new stage?', 'Use <code>registry.nextId()</code>. It returns the first free id after the current size, e.g. <code>mod-4659</code>. The format is always <code>mod-</code> plus four digits.'],
    ['Why does the demo <code>pipeline</code> produce garbage?', 'Because it runs <b>all</b> stages in id order, and later stages are not meant to follow earlier ones. It exists as a smoke test. Real code builds an explicit pipeline with <code>createPipeline</code>.'],
    ['Can a stage have side effects?', 'It can, but it must not. Stages are expected to be pure: same input, same output, no mutation, no I/O. Purity is what makes them safe to reorder and reuse.'],
    ['What happens if a stage throws?', 'By default the pipeline raises a <code>PipelineError</code>. Pass <code>{ onError: \'skip\' }</code> to keep the previous value and continue, <code>\'stop\'</code> to halt, or <code>\'collect\'</code> to keep going and collect the errors on <code>pipe.errors</code>.'],
    ['How is the catalog kept in sync?', 'Everything under <code>src/modules/</code> and <code>docs/CATALOG.md</code> is generated by <code>scripts/generate.js</code>. Run <code>npm run generate</code> after changing the generator; <code>npm run lint</code> verifies structure and <code>npm test</code> verifies behaviour.'],
  ];
  var faqEl = $('#faq-list');
  if (faqEl) {
    FAQ.forEach(function (pair) {
      var d = document.createElement('details');
      var sum = document.createElement('summary');
      sum.textContent = pair[0];
      var a = el('div', 'a');
      a.innerHTML = pair[1];
      d.appendChild(sum);
      d.appendChild(a);
      faqEl.appendChild(d);
    });
  }

  /* =========================================================
     command palette
     ========================================================= */
  var palette = $('#palette');
  var paletteInput = $('#palette-input');
  var paletteList = $('#palette-list');
  var paletteIndex = -1;
  var paletteData = [];

  function openPalette() {
    if (!palette) return;
    palette.setAttribute('open', '');
    paletteInput.value = '';
    renderPalette('');
    paletteInput.focus();
  }
  function closePalette() {
    if (!palette) return;
    palette.removeAttribute('open');
  }
  function renderPalette(q) {
    if (!paletteList) return;
    paletteData = searchStages(q, 40);
    paletteIndex = paletteData.length ? 0 : -1;
    paletteList.textContent = '';
    paletteData.forEach(function (s, i) {
      var li = el('li', 'palette-item');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === paletteIndex));
      li.appendChild(el('span', 'pi-name', s.name));
      li.appendChild(el('span', 'pi-cat', s.category));
      li.appendChild(el('span', 'pi-id', s.id));
      li.addEventListener('mousedown', function (e) {
        e.preventDefault();
        addStage(s);
        closePalette();
      });
      paletteList.appendChild(li);
    });
    if (!paletteData.length) {
      var none = el('li', 'palette-item');
      none.appendChild(el('span', 'pi-name', 'no matches'));
      paletteList.appendChild(none);
    }
  }
  function paletteMove(dir) {
    if (!paletteData.length) return;
    paletteIndex = (paletteIndex + dir + paletteData.length) % paletteData.length;
    Array.prototype.forEach.call(paletteList.children, function (li, i) {
      li.setAttribute('aria-selected', String(i === paletteIndex));
    });
    var cur = paletteList.children[paletteIndex];
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
  }

  var paletteOpen = $('#palette-open');
  if (paletteOpen) paletteOpen.addEventListener('click', openPalette);
  if (palette) {
    Array.prototype.forEach.call(palette.querySelectorAll('[data-palette-close]'), function (n) {
      n.addEventListener('click', closePalette);
    });
  }
  if (paletteInput) {
    paletteInput.addEventListener('input', function () { renderPalette(paletteInput.value.trim()); });
    paletteInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); paletteMove(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); paletteMove(-1); }
      else if (e.key === 'Enter') {
        var pick = paletteData[paletteIndex];
        if (pick) { e.preventDefault(); addStage(pick); closePalette(); }
      } else if (e.key === 'Escape') { closePalette(); }
    });
  }
  document.addEventListener('keydown', function (e) {
    var open = (e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey);
    if (open) { e.preventDefault(); palette && palette.hasAttribute('open') ? closePalette() : openPalette(); }
    else if (e.key === 'Escape' && palette && palette.hasAttribute('open')) closePalette();
  });

  /* =========================================================
     deep links  (?p=id.id.id&in=text)
     ========================================================= */
  var urlTimer = null;
  function updateUrl() {
    clearTimeout(urlTimer);
    urlTimer = setTimeout(function () {
      try {
        var ids = pipeline.map(function (p) { return p.stage.id + (p.enabled ? '' : '!'); }).join('.');
        var params = new URLSearchParams();
        if (ids) params.set('p', ids);
        if (inputEl.value !== '') params.set('in', inputEl.value);
        var qs = params.toString();
        var next = location.pathname + (qs ? '?' + qs : '') + location.hash;
        history.replaceState(null, '', next);
      } catch (e) { /* ignore */ }
    }, 250);
  }
  function loadFromUrl() {
    var params = new URLSearchParams(location.search);
    var p = params.get('p');
    var inp = params.get('in');
    if (inp != null && inputEl) inputEl.value = inp;
    if (!p) return;
    p.split('.').forEach(function (token) {
      if (!token) return;
      var disabled = token.charAt(token.length - 1) === '!';
      var id = disabled ? token.slice(0, -1) : token;
      var stage = byId.get(id);
      if (stage) pipeline.push({ stage: stage, enabled: !disabled });
    });
  }

  /* =========================================================
     init
     ========================================================= */
  renderStats();
  renderMarquee();
  renderAuto();
  renderFilters();
  renderCatalog();
  loadFromUrl();
  render();
  setInterval(renderAuto, 2800);

  if (broken > 0) {
    console.warn('[stagekit] ' + broken + ' stage body/bodies failed to compile');
  }
})();
