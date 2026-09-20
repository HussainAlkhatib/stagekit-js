'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0315",
  name: "Take first 5 lines",
  description: "Keeps the first 5 lines.",
  run: (value) => String(value).split('\n').slice(0, 5).join('\n'),
});
