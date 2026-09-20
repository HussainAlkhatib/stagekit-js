/* stagekit - workbench
   Runs the real stage bodies (mirrored into assets/stages.js) in the browser. */
(function () {
  'use strict';

  var STAGES = (window.STAGEKIT_STAGES || []).map(function (s) {
    return {
      id: s.id,
      name: s.name,
      description: s.description,
      category: s.category,
      run: (0, eval)('(' + s.run + ')'),
    };
  });

  var byName = new Map();
  STAGES.forEach(function (s) { if (!byName.has(s.name)) byName.set(s.name, s); });

  var $ = function (sel) { return document.querySelector(sel); };

  var inputEl = $('#input');
  var searchEl = $('#stage-search');
  var suggEl = $('#suggestions');
  var pipelineEl = $('#pipeline');
  var emptyHint = $('#pipeline-empty');
  var outputEl = $('#output');
  var codeEl = $('#code-out');
  var statusEl = $('#output-status');

  var pipeline = [];
  var activeSuggestion = -1;

  /* ---------- registry search (mirrors the Node implementation) ---------- */
  function search(query, limit) {
    var needle = String(query).toLowerCase();
    var out = [];
    for (var i = 0; i < STAGES.length && out.length < (limit || 8); i++) {
      var s = STAGES[i];
      if (
        s.id.toLowerCase().indexOf(needle) !== -1 ||
        s.name.toLowerCase().indexOf(needle) !== -1 ||
        s.description.toLowerCase().indexOf(needle) !== -1
      ) out.push(s);
    }
    return out;
  }

  function runPipeline(value) {
    var current = value;
    for (var i = 0; i < pipeline.length; i++) current = pipeline[i].run(current);
    return current;
  }

  /* ---------- workbench render ---------- */
  function render() {
    var result;
    try { result = runPipeline(inputEl.value); }
    catch (err) { result = 'error: ' + (err && err.message ? err.message : String(err)); }
    outputEl.textContent = result;

    pipelineEl.innerHTML = '';
    pipeline.forEach(function (stage, i) {
      var li = document.createElement('li');

      var idx = document.createElement('span');
      idx.className = 'idx';
      idx.textContent = String(i + 1).padStart(2, '0');

      var name = document.createElement('span');
      name.className = 'p-name';
      name.textContent = stage.name;

      var id = document.createElement('span');
      id.className = 'p-id';
      id.textContent = stage.id;

      var rm = document.createElement('button');
      rm.className = 'remove';
      rm.setAttribute('aria-label', 'Remove ' + stage.name);
      rm.textContent = '\u00d7';
      rm.addEventListener('click', function () { pipeline.splice(i, 1); render(); });

      li.append(idx, name, id, rm);
      pipelineEl.appendChild(li);
    });

    emptyHint.hidden = pipeline.length > 0;
    codeEl.textContent = equivalentCode();
  }

  function equivalentCode() {
    if (pipeline.length === 0) return '// stack stages to see the equivalent pipeline code';
    var lines = ["const { registry, createPipeline } = require('stagekit-js');", '', 'const pipe = createPipeline(['];
    pipeline.forEach(function (s) { lines.push("  registry.get('" + s.id + "'), // " + s.name); });
    lines.push(']);', '');
    lines.push('pipe(' + JSON.stringify(inputEl.value) + ');');
    return lines.join('\n');
  }

  function addStage(stage) { if (stage) { pipeline.push(stage); render(); } }

  /* ---------- suggestions ---------- */
  function hideSuggestions() { suggEl.hidden = true; suggEl.innerHTML = ''; activeSuggestion = -1; }

  function showSuggestions(query) {
    if (!query) return hideSuggestions();
    var matches = search(query, 8);
    if (matches.length === 0) {
      suggEl.innerHTML = '<li class="s-id">no matches</li>';
      suggEl.hidden = false;
      return;
    }
    suggEl.innerHTML = '';
    matches.forEach(function (s, i) {
      var li = document.createElement('li');
      li.dataset.index = String(i);
      var nm = document.createElement('span'); nm.className = 's-name'; nm.textContent = s.name;
      var id = document.createElement('span'); id.className = 's-id'; id.textContent = s.id;
      li.append(nm, id);
      li.addEventListener('mousedown', function (e) {
        e.preventDefault(); addStage(s); searchEl.value = ''; hideSuggestions();
      });
      suggEl.appendChild(li);
    });
    suggEl.hidden = false;
    activeSuggestion = -1;
  }

  function highlight(dir) {
    var items = Array.prototype.slice.call(suggEl.querySelectorAll('li[data-index]'));
    if (!items.length) return;
    activeSuggestion = (activeSuggestion + dir + items.length) % items.length;
    items.forEach(function (li, i) { li.classList.toggle('active', i === activeSuggestion); });
  }

  /* ---------- events ---------- */
  inputEl.addEventListener('input', render);
  searchEl.addEventListener('input', function () { showSuggestions(searchEl.value.trim()); });
  searchEl.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); highlight(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(-1); }
    else if (e.key === 'Enter' && activeSuggestion >= 0) {
      var m = search(searchEl.value.trim(), 8)[activeSuggestion];
      addStage(m); searchEl.value = ''; hideSuggestions();
    } else if (e.key === 'Escape') hideSuggestions();
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.search-wrap')) hideSuggestions(); });
  $('#clear').addEventListener('click', function () { pipeline = []; render(); });

  document.querySelectorAll('.chip[data-add]').forEach(function (btn) {
    btn.addEventListener('click', function () { addStage(byName.get(btn.dataset.add)); });
  });

  /* ---------- copy ---------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () { copyText(btn.dataset.copy, btn); });
  });
  document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var t = document.getElementById(btn.dataset.copyTarget);
      copyText(t ? t.textContent : '', btn);
    });
  });
  function copyText(text, btn) {
    var done = function () {
      var o = btn.textContent; btn.textContent = 'copied';
      statusEl.textContent = '\u2713 copied';
      setTimeout(function () { btn.textContent = o; statusEl.textContent = ''; }, 1300);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text, done); });
    } else fallback(text, done);
  }
  function fallback(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------- registry stats ---------- */
  function renderStats() {
    var byCat = {};
    STAGES.forEach(function (s) { byCat[s.category] = (byCat[s.category] || 0) + 1; });
    var cats = Object.keys(byCat).sort(function (a, b) { return byCat[b] - byCat[a] || a.localeCompare(b); });
    var max = byCat[cats[0]] || 1;

    $('#hero-count').textContent = STAGES.length.toLocaleString();
    $('#stage-count').textContent = STAGES.length.toLocaleString();
    $('#cat-count').textContent = String(cats.length);

    var box = $('#categories');
    box.innerHTML = '';
    cats.forEach(function (name) {
      var row = document.createElement('div');
      row.className = 'bar-row';

      var nm = document.createElement('span'); nm.className = 'bar-name'; nm.textContent = name;
      var track = document.createElement('span'); track.className = 'bar-track';
      var fill = document.createElement('span'); fill.className = 'bar-fill';
      fill.style.width = Math.max(3, Math.round((byCat[name] / max) * 100)) + '%';
      track.appendChild(fill);
      var n = document.createElement('span'); n.className = 'bar-n'; n.textContent = byCat[name].toLocaleString();

      row.append(nm, track, n);
      box.appendChild(row);
    });
  }

  /* ---------- marquee ---------- */
  function renderMarquee() {
    var track = $('#marquee-track');
    if (!track) return;
    // A hand-picked, readable spread of stage names (not all 4658).
    var picks = ['Uppercase', 'Lowercase', 'Camel case', 'Snake case', 'Kebab case', 'Title case',
      'Slug with "-"', 'Whitespace to "-"', 'Base64 encode', 'Hex encode', 'URI encode',
      'HTML escape', 'Caesar shift +1', 'Atbash', 'Reverse characters', 'Reverse lines',
      'Sort lines', 'Unique lines', 'Trim lines', 'Number lines', 'Mask all but last 4',
      'Truncate to 20', 'Pad start to 12 with "="', 'Wrap in []', 'Mirror'];
    var html = '';
    picks.forEach(function (name) {
      var s = byName.get(name);
      if (!s) return;
      html += '<span><b>' + esc(name) + '</b> <span class="a">' + s.id + '</span></span>';
    });
    // duplicate for seamless loop
    track.innerHTML = html + html;
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

  /* ---------- auto readout (hero) ---------- */
  function renderAuto() {
    var pick = ['Slug with "-"', 'Uppercase', 'Base64 encode', 'Reverse characters',
      'Caesar shift +1', 'Camel case', 'HTML escape', 'Mirror'];
    var inputs = ['Hello World', 'my post title', 'secret note', 'abc123', 'StageKit', 'one two three'];
    var stageName = pick[Math.floor(Math.random() * pick.length)];
    var stage = byName.get(stageName);
    var value = inputs[Math.floor(Math.random() * inputs.length)];
    if (!stage) return;

    $('#auto-in').textContent = JSON.stringify(value);
    $('#auto-stage').textContent = stage.name;
    $('#auto-id').textContent = stage.id;
    $('#auto-count').textContent = STAGES.length.toLocaleString() + ' stages';
    var out;
    try { out = stage.run(value); } catch (e) { out = '(error)'; }
    $('#auto-out').textContent = JSON.stringify(out);
  }

  /* ---------- init ---------- */
  renderStats();
  renderMarquee();
  renderAuto();
  render();
  setInterval(renderAuto, 2600);
})();
