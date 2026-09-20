'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4373",
  name: "Replace \"5\" with \"t\"",
  description: "Replaces every 5 with t.",
  run: (value) => String(value).split("5").join("t"),
});
