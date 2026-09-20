'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2227",
  name: "Replace \"w\" with \"i\"",
  description: "Replaces every w with i.",
  run: (value) => String(value).split("w").join("i"),
});
