'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0380",
  name: "Take last 8 lines",
  description: "Keeps the last 8 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 8)).join('\n'); },
});
