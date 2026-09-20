'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0205",
  name: "Take first 1 lines",
  description: "Keeps the first 1 lines.",
  run: (value) => String(value).split('\n').slice(0, 1).join('\n'),
});
