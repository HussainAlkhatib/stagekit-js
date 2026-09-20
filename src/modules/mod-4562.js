'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4562",
  name: "Replace \"8\" with \"z\"",
  description: "Replaces every 8 with z.",
  run: (value) => String(value).split("8").join("z"),
});
