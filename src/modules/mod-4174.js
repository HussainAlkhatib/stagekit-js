'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4174",
  name: "Replace \"2\" with \"d\"",
  description: "Replaces every 2 with d.",
  run: (value) => String(value).split("2").join("d"),
});
