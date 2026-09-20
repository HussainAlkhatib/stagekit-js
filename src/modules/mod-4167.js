'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4167",
  name: "Replace \"1\" with \"6\"",
  description: "Replaces every 1 with 6.",
  run: (value) => String(value).split("1").join("6"),
});
