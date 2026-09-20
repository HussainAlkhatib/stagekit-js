'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2645",
  name: "Replace \"C\" with \"9\"",
  description: "Replaces every C with 9.",
  run: (value) => String(value).split("C").join("9"),
});
