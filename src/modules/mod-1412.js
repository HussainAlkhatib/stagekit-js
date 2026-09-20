'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1412",
  name: "Replace \"i\" with \"W\"",
  description: "Replaces every i with W.",
  run: (value) => String(value).split("i").join("W"),
});
