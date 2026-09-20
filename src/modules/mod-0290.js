'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0290",
  name: "Drop last 4 lines",
  description: "Drops the last 4 lines.",
  run: (value) => String(value).split('\n').slice(0, -4).join('\n'),
});
