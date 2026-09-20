'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1377",
  name: "Replace \"i\" with \"n\"",
  description: "Replaces every i with n.",
  run: (value) => String(value).split("i").join("n"),
});
