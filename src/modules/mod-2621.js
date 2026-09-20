'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2621",
  name: "Replace \"C\" with \"L\"",
  description: "Replaces every C with L.",
  run: (value) => String(value).split("C").join("L"),
});
