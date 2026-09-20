'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4378",
  name: "Replace \"5\" with \"y\"",
  description: "Replaces every 5 with y.",
  run: (value) => String(value).split("5").join("y"),
});
