'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3869",
  name: "Replace \"X\" with \"d\"",
  description: "Replaces every X with d.",
  run: (value) => String(value).split("X").join("d"),
});
