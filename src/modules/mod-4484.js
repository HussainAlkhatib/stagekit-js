'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4484",
  name: "Replace \"7\" with \"i\"",
  description: "Replaces every 7 with i.",
  run: (value) => String(value).split("7").join("i"),
});
