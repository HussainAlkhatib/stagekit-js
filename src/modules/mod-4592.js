'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4592",
  name: "Replace \"8\" with \"3\"",
  description: "Replaces every 8 with 3.",
  run: (value) => String(value).split("8").join("3"),
});
