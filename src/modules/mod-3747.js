'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3747",
  name: "Replace \"V\" with \"d\"",
  description: "Replaces every V with d.",
  run: (value) => String(value).split("V").join("d"),
});
