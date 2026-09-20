'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3259",
  name: "Replace \"N\" with \"d\"",
  description: "Replaces every N with d.",
  run: (value) => String(value).split("N").join("d"),
});
