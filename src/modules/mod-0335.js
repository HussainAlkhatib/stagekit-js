'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0335",
  name: "Take first 6 lines",
  description: "Keeps the first 6 lines.",
  run: (value) => String(value).split('\n').slice(0, 6).join('\n'),
});
