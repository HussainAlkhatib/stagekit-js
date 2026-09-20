'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0266",
  name: "Drop last 3 lines",
  description: "Drops the last 3 lines.",
  run: (value) => String(value).split('\n').slice(0, -3).join('\n'),
});
