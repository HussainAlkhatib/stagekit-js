'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4590",
  name: "Replace \"8\" with \"1\"",
  description: "Replaces every 8 with 1.",
  run: (value) => String(value).split("8").join("1"),
});
