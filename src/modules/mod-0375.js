'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0375",
  name: "Take first 8 lines",
  description: "Keeps the first 8 lines.",
  run: (value) => String(value).split('\n').slice(0, 8).join('\n'),
});
