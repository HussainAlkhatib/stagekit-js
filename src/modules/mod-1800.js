'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1800",
  name: "Replace \"p\" with \"i\"",
  description: "Replaces every p with i.",
  run: (value) => String(value).split("p").join("i"),
});
