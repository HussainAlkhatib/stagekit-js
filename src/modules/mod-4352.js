'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4352",
  name: "Replace \"4\" with \"8\"",
  description: "Replaces every 4 with 8.",
  run: (value) => String(value).split("4").join("8"),
});
