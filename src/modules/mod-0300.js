'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0300",
  name: "Take last 4 lines",
  description: "Keeps the last 4 lines.",
  run: (value) => { const lines = String(value).split('\n'); return lines.slice(Math.max(0, lines.length - 4)).join('\n'); },
});
