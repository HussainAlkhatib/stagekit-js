'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0330",
  name: "Drop last 6 lines",
  description: "Drops the last 6 lines.",
  run: (value) => String(value).split('\n').slice(0, -6).join('\n'),
});
