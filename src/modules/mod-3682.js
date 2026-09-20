'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3682",
  name: "Replace \"T\" with \"9\"",
  description: "Replaces every T with 9.",
  run: (value) => String(value).split("T").join("9"),
});
