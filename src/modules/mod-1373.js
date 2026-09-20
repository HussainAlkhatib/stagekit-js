'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1373",
  name: "Replace \"i\" with \"j\"",
  description: "Replaces every i with j.",
  run: (value) => String(value).split("i").join("j"),
});
