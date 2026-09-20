'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2837",
  name: "Replace \"G\" with \"i\"",
  description: "Replaces every G with i.",
  run: (value) => String(value).split("G").join("i"),
});
