'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0365",
  name: "Drop first 8 lines",
  description: "Drops the first 8 lines.",
  run: (value) => String(value).split('\n').slice(8).join('\n'),
});
