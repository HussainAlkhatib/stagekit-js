'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0355",
  name: "Take first 7 lines",
  description: "Keeps the first 7 lines.",
  run: (value) => String(value).split('\n').slice(0, 7).join('\n'),
});
