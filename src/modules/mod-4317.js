'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4317",
  name: "Replace \"4\" with \"y\"",
  description: "Replaces every 4 with y.",
  run: (value) => String(value).split("4").join("y"),
});
