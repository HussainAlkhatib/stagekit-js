'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1423",
  name: "Replace \"i\" with \"7\"",
  description: "Replaces every i with 7.",
  run: (value) => String(value).split("i").join("7"),
});
