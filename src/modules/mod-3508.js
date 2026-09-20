'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3508",
  name: "Replace \"R\" with \"i\"",
  description: "Replaces every R with i.",
  run: (value) => String(value).split("R").join("i"),
});
