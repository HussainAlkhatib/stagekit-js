'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0232",
  name: "Drop last 2 lines",
  description: "Drops the last 2 lines.",
  run: (value) => String(value).split('\n').slice(0, -2).join('\n'),
});
