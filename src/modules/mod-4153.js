'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4153",
  name: "Replace \"1\" with \"R\"",
  description: "Replaces every 1 with R.",
  run: (value) => String(value).split("1").join("R"),
});
