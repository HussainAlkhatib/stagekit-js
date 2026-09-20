'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0320",
  name: "Take last 5 lines",
  description: "Keeps the last 5 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 5)).join('\n'); },
});
