'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1617",
  name: "Replace \"m\" with \"i\"",
  description: "Replaces every m with i.",
  run: (value) => String(value).split("m").join("i"),
});
