'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0305",
  name: "Drop first 5 lines",
  description: "Drops the first 5 lines.",
  run: (value) => String(value).split('\n').slice(5).join('\n'),
});
