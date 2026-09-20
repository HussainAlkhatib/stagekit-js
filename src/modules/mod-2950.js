'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2950",
  name: "Replace \"H\" with \"9\"",
  description: "Replaces every H with 9.",
  run: (value) => String(value).split("H").join("9"),
});
