'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0360",
  name: "Take last 7 lines",
  description: "Keeps the last 7 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 7)).join('\n'); },
});
