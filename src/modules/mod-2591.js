'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2591",
  name: "Replace \"C\" with \"g\"",
  description: "Replaces every C with g.",
  run: (value) => String(value).split("C").join("g"),
});
