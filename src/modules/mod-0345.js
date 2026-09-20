'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0345",
  name: "Drop first 7 lines",
  description: "Drops the first 7 lines.",
  run: (value) => String(value).split('\n').slice(7).join('\n'),
});
