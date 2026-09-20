'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2649",
  name: "Replace \"D\" with \"d\"",
  description: "Replaces every D with d.",
  run: (value) => String(value).split("D").join("d"),
});
