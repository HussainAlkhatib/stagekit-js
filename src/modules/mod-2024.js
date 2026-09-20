'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2024",
  name: "Replace \"s\" with \"Y\"",
  description: "Replaces every s with Y.",
  run: (value) => String(value).split("s").join("Y"),
});
