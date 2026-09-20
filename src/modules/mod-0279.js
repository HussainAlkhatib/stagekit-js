'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0279",
  name: "Take last 3 lines",
  description: "Keeps the last 3 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 3)).join('\n'); },
});
