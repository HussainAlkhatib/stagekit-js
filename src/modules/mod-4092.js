'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4092",
  name: "Replace \"0\" with \"R\"",
  description: "Replaces every 0 with R.",
  run: (value) => String(value).split("0").join("R"),
});
