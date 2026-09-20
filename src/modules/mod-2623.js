'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2623",
  name: "Replace \"C\" with \"N\"",
  description: "Replaces every C with N.",
  run: (value) => String(value).split("C").join("N"),
});
