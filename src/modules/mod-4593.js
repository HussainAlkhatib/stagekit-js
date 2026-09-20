'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4593",
  name: "Replace \"8\" with \"4\"",
  description: "Replaces every 8 with 4.",
  run: (value) => String(value).split("8").join("4"),
});
