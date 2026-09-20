'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4475",
  name: "Replace \"6\" with \"9\"",
  description: "Replaces every 6 with 9.",
  run: (value) => String(value).split("6").join("9"),
});
