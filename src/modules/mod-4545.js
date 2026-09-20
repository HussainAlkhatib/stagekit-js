'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4545",
  name: "Replace \"8\" with \"i\"",
  description: "Replaces every 8 with i.",
  run: (value) => String(value).split("8").join("i"),
});
