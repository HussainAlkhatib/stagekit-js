'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0187",
  name: "Drop first 1 lines",
  description: "Drops the first 1 lines.",
  run: (value) => String(value).split('\n').slice(1).join('\n'),
});
