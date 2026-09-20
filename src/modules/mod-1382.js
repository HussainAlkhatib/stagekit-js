'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1382",
  name: "Replace \"i\" with \"s\"",
  description: "Replaces every i with s.",
  run: (value) => String(value).split("i").join("s"),
});
