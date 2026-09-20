'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2017",
  name: "Replace \"s\" with \"R\"",
  description: "Replaces every s with R.",
  run: (value) => String(value).split("s").join("R"),
});
