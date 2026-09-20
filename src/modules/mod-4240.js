'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4240",
  name: "Replace \"3\" with \"i\"",
  description: "Replaces every 3 with i.",
  run: (value) => String(value).split("3").join("i"),
});
