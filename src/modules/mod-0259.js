'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0259",
  name: "Drop first 3 lines",
  description: "Drops the first 3 lines.",
  run: (value) => String(value).split('\n').slice(3).join('\n'),
});
