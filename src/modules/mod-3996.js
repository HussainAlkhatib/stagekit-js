'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3996",
  name: "Replace \"Z\" with \"i\"",
  description: "Replaces every Z with i.",
  run: (value) => String(value).split("Z").join("i"),
});
