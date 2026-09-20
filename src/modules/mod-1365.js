'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1365",
  name: "Replace \"i\" with \"a\"",
  description: "Replaces every i with a.",
  run: (value) => String(value).split("i").join("a"),
});
