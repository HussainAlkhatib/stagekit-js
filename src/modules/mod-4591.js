'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4591",
  name: "Replace \"8\" with \"2\"",
  description: "Replaces every 8 with 2.",
  run: (value) => String(value).split("8").join("2"),
});
