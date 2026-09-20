'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0285",
  name: "Drop first 4 lines",
  description: "Drops the first 4 lines.",
  run: (value) => String(value).split('\n').slice(4).join('\n'),
});
