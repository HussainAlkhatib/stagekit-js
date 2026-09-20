'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1410",
  name: "Replace \"i\" with \"U\"",
  description: "Replaces every i with U.",
  run: (value) => String(value).split("i").join("U"),
});
