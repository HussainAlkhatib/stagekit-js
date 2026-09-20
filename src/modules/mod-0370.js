'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0370",
  name: "Drop last 8 lines",
  description: "Drops the last 8 lines.",
  run: (value) => String(value).split('\n').slice(0, -8).join('\n'),
});
