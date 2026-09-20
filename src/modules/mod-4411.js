'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4411",
  name: "Replace \"5\" with \"6\"",
  description: "Replaces every 5 with 6.",
  run: (value) => String(value).split("5").join("6"),
});
