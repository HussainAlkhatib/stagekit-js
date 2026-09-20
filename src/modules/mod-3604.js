'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3604",
  name: "Replace \"S\" with \"R\"",
  description: "Replaces every S with R.",
  run: (value) => String(value).split("S").join("R"),
});
