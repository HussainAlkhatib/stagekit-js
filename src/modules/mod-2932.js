'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2932",
  name: "Replace \"H\" with \"R\"",
  description: "Replaces every H with R.",
  run: (value) => String(value).split("H").join("R"),
});
