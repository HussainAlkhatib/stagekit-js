'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1026",
  name: "Replace \"e\" with \"d\"",
  description: "Replaces every e with d.",
  run: (value) => String(value).split("e").join("d"),
});
