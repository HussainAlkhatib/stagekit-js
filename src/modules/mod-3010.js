'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3010",
  name: "Replace \"I\" with \"8\"",
  description: "Replaces every I with 8.",
  run: (value) => String(value).split("I").join("8"),
});
