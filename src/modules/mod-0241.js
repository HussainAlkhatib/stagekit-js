'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0241",
  name: "Take first 2 lines",
  description: "Keeps the first 2 lines.",
  run: (value) => String(value).split('\n').slice(0, 2).join('\n'),
});
