'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0250",
  name: "Take last 2 lines",
  description: "Keeps the last 2 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 2)).join('\n'); },
});
