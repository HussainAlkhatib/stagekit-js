'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3625",
  name: "Replace \"T\" with \"d\"",
  description: "Replaces every T with d.",
  run: (value) => String(value).split("T").join("d"),
});
