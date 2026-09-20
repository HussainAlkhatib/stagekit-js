'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4170",
  name: "Replace \"1\" with \"9\"",
  description: "Replaces every 1 with 9.",
  run: (value) => String(value).split("1").join("9"),
});
