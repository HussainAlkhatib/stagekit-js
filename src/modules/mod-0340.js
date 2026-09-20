'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0340",
  name: "Take last 6 lines",
  description: "Keeps the last 6 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 6)).join('\n'); },
});
