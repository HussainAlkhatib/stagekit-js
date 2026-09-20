'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1411",
  name: "Replace \"i\" with \"V\"",
  description: "Replaces every i with V.",
  run: (value) => String(value).split("i").join("V"),
});
