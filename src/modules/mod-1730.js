'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1730",
  name: "Replace \"n\" with \"9\"",
  description: "Replaces every n with 9.",
  run: (value) => String(value).split("n").join("9"),
});
