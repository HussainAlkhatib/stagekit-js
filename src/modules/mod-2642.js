'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2642",
  name: "Replace \"C\" with \"6\"",
  description: "Replaces every C with 6.",
  run: (value) => String(value).split("C").join("6"),
});
