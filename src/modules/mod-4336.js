'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4336",
  name: "Replace \"4\" with \"R\"",
  description: "Replaces every 4 with R.",
  run: (value) => String(value).split("4").join("R"),
});
