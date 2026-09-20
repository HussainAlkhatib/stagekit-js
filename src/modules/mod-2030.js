'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2030",
  name: "Replace \"s\" with \"4\"",
  description: "Replaces every s with 4.",
  run: (value) => String(value).split("s").join("4"),
});
