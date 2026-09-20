'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4208",
  name: "Replace \"2\" with \"L\"",
  description: "Replaces every 2 with L.",
  run: (value) => String(value).split("2").join("L"),
});
