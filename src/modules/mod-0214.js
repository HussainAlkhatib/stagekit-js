'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0214",
  name: "Take last 1 lines",
  description: "Keeps the last 1 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 1)).join('\n'); },
});
