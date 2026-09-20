'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3020",
  name: "Replace \"J\" with \"i\"",
  description: "Replaces every J with i.",
  run: (value) => String(value).split("J").join("i"),
});
