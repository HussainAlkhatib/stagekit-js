'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3665",
  name: "Replace \"T\" with \"R\"",
  description: "Replaces every T with R.",
  run: (value) => String(value).split("T").join("R"),
});
