'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1678",
  name: "Replace \"n\" with \"i\"",
  description: "Replaces every n with i.",
  run: (value) => String(value).split("n").join("i"),
});
