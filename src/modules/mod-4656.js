'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4656",
  name: "Replace \"9\" with \"6\"",
  description: "Replaces every 9 with 6.",
  run: (value) => String(value).split("9").join("6"),
});
