'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4559",
  name: "Replace \"8\" with \"w\"",
  description: "Replaces every 8 with w.",
  run: (value) => String(value).split("8").join("w"),
});
