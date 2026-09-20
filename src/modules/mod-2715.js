'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2715",
  name: "Replace \"E\" with \"i\"",
  description: "Replaces every E with i.",
  run: (value) => String(value).split("E").join("i"),
});
