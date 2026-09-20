/* stagekit-js site - live demo
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
  STAGES.forEach(function (s) {
    if (!byName.has(s.name)) byName.set(s.name, s);
  });

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

  /* ---- registry search (mirrors the Node implementation) ---- */
  function search(query, limit) {
    var needle = String(query).toLowerCase();
    var out = [];
    for (var i = 0; i < STAGES.length && out.length < (limit || 8); i++) {
      var s = STAGES[i];
      if (
        s.id.toLowerCase().indexOf(needle) !== -1 ||
        s.name.toLowerCase().indexOf(needle) !== -1 ||
        s.description.toLowerCase().indexOf(needle) !== -1
      ) {
        out.push(s);
      }
    }
    return out;
  }

  /* ---- pipeline run ---- */
  function runPipeline(value) {
    var current = value;
    for (var i = 0; i < pipeline.length; i++) {
      current = pipeline[i].run(current);
    }
    return current;
  }

  function render() {
    // output
    var result;
    try {
      result = runPipeline(inputEl.value);
    } catch (err) {
      result = 'Error: ' + (err && err.message ? err.message : String(err));
    }
    outputEl.textContent = result;

    // pipeline list
    pipelineEl.innerHTML = '';
    pipeline.forEach(function (stage, i) {
      var li = document.createElement('li');

      var idx = document.createElement('span');
      idx.className = 'idx';
      idx.textContent = String(i + 1);

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
      rm.addEventListener('click', function () {
        pipeline.splice(i, 1);
        render();
      });

      li.appendChild(idx);
      li.appendChild(name);
      li.appendChild(id);
      li.appendChild(rm);
      pipelineEl.appendChild(li);
    });

    emptyHint.hidden = pipeline.length > 0;

    // equivalent code
    codeEl.textContent = equivalentCode();
  }

  function equivalentCode() {
    if (pipeline.length === 0) return '// add stages to see the equivalent pipeline code';
    var lines = ["const { registry, createPipeline } = require('stagekit-js');", '', 'const pipe = createPipeline([',];
    pipeline.forEach(function (s) {
      lines.push("  registry.get('" + s.id + "'), // " + s.name);
    });
    lines.push(']);');
    lines.push('');
    lines.push('pipe(' + JSON.stringify(inputEl.value) + ');');
    return lines.join('\n');
  }

  function addStage(stage) {
    if (!stage) return;
    pipeline.push(stage);
    render();
  }

  /* ---- search suggestions ---- */
  function hideSuggestions() {
    suggEl.hidden = true;
    suggEl.innerHTML = '';
    activeSuggestion = -1;
  }

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

      var nm = document.createElement('span');
      nm.className = 's-name';
      nm.textContent = s.name;

      var id = document.createElement('span');
      id.className = 's-id';
      id.textContent = s.id;

      li.appendChild(nm);
      li.appendChild(id);
      li.addEventListener('mousedown', function (e) {
        e.preventDefault();
        addStage(s);
        searchEl.value = '';
        hideSuggestions();
      });
      suggEl.appendChild(li);
    });
    suggEl.hidden = false;
    activeSuggestion = -1;
  }

  function highlight(dir) {
    var items = Array.prototype.slice.call(suggEl.querySelectorAll('li[data-index]'));
    if (items.length === 0) return;
    activeSuggestion = (activeSuggestion + dir + items.length) % items.length;
    items.forEach(function (li, i) {
      li.classList.toggle('active', i === activeSuggestion);
    });
  }

  /* ---- events ---- */
  inputEl.addEventListener('input', render);

  searchEl.addEventListener('input', function () {
    showSuggestions(searchEl.value.trim());
  });

  searchEl.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); highlight(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(-1); }
    else if (e.key === 'Enter') {
      var items = suggEl.querySelectorAll('li[data-index]');
      if (activeSuggestion >= 0 && items[activeSuggestion]) {
        var m = search(searchEl.value.trim(), 8)[activeSuggestion];
        addStage(m);
        searchEl.value = '';
        hideSuggestions();
      }
    } else if (e.key === 'Escape') {
      hideSuggestions();
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-wrap')) hideSuggestions();
  });

  $('#clear').addEventListener('click', function () {
    pipeline = [];
    render();
  });

  document.querySelectorAll('.chip[data-add]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var stage = byName.get(btn.dataset.add);
      if (stage) addStage(stage);
    });
  });

  /* ---- copy buttons ---- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyText(btn.dataset.copy, btn);
    });
  });
  document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.dataset.copyTarget);
      copyText(target ? target.textContent : '', btn);
    });
  });

  function copyText(text, btn) {
    var done = function () {
      var original = btn.textContent;
      btn.textContent = 'Copied!';
      statusEl.textContent = 'copied to clipboard';
      setTimeout(function () { btn.textContent = original; statusEl.textContent = ''; }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text, done); });
    } else {
      fallback(text, done);
    }
  }

  function fallback(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---- stats / categories ---- */
  function renderStats() {
    var count = STAGES.length;
    var byCat = {};
    STAGES.forEach(function (s) {
      byCat[s.category] = (byCat[s.category] || 0) + 1;
    });
    var cats = Object.keys(byCat).sort(function (a, b) {
      return byCat[b] - byCat[a] || a.localeCompare(b);
    });

    $('#hero-count').textContent = count.toLocaleString();
    $('#stage-count').textContent = count.toLocaleString();
    $('#cat-count').textContent = String(cats.length);

    var max = byCat[cats[0]] || 1;
    var box = $('#categories');
    box.innerHTML = '';
    cats.forEach(function (name) {
      var el = document.createElement('div');
      el.className = 'cat';

      var n = document.createElement('div');
      n.className = 'cat-name';
      n.textContent = name;

      var c = document.createElement('div');
      c.className = 'cat-count';
      c.textContent = byCat[name].toLocaleString();

      var bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.width = Math.max(6, Math.round((byCat[name] / max) * 100)) + '%';
      bar.style.maxWidth = '100%';

      el.appendChild(n);
      el.appendChild(c);
      el.appendChild(bar);
      box.appendChild(el);
    });
  }

  /* ---- init ---- */
  renderStats();
  render();
})();
