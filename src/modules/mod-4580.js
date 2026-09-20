'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4580",
  name: "Replace \"8\" with \"R\"",
  description: "Replaces every 8 with R.",
  run: (value) => String(value).split("8").join("R"),
});
