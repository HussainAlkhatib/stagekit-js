'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0310",
  name: "Drop last 5 lines",
  description: "Drops the last 5 lines.",
  run: (value) => String(value).split('\n').slice(0, -5).join('\n'),
});
