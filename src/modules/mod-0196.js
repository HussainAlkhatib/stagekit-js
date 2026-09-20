'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0196",
  name: "Drop last 1 lines",
  description: "Drops the last 1 lines.",
  run: (value) => String(value).split('\n').slice(0, -1).join('\n'),
});
