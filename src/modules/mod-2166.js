'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2166",
  name: "Replace \"v\" with \"i\"",
  description: "Replaces every v with i.",
  run: (value) => String(value).split("v").join("i"),
});
