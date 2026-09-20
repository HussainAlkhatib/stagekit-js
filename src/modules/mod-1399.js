'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1399",
  name: "Replace \"i\" with \"J\"",
  description: "Replaces every i with J.",
  run: (value) => String(value).split("i").join("J"),
});
