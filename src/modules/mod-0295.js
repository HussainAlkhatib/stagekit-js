'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0295",
  name: "Take first 4 lines",
  description: "Keeps the first 4 lines.",
  run: (value) => String(value).split('\n').slice(0, 4).join('\n'),
});
