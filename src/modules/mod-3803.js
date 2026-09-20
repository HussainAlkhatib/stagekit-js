'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3803",
  name: "Replace \"V\" with \"8\"",
  description: "Replaces every V with 8.",
  run: (value) => String(value).split("V").join("8"),
});
