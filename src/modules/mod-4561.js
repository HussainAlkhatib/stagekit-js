'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4561",
  name: "Replace \"8\" with \"y\"",
  description: "Replaces every 8 with y.",
  run: (value) => String(value).split("8").join("y"),
});
