'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1712",
  name: "Replace \"n\" with \"R\"",
  description: "Replaces every n with R.",
  run: (value) => String(value).split("n").join("R"),
});
