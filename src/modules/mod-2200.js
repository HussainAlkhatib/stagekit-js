'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2200",
  name: "Replace \"v\" with \"R\"",
  description: "Replaces every v with R.",
  run: (value) => String(value).split("v").join("R"),
});
