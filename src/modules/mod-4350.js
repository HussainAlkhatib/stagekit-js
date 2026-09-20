'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4350",
  name: "Replace \"4\" with \"6\"",
  description: "Replaces every 4 with 6.",
  run: (value) => String(value).split("4").join("6"),
});
