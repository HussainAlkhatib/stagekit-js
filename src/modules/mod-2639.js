'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2639",
  name: "Replace \"C\" with \"3\"",
  description: "Replaces every C with 3.",
  run: (value) => String(value).split("C").join("3"),
});
