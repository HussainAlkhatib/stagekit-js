'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0350",
  name: "Drop last 7 lines",
  description: "Drops the last 7 lines.",
  run: (value) => String(value).split('\n').slice(0, -7).join('\n'),
});
