'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1014",
  name: "Replace \"d\" with \"9\"",
  description: "Replaces every d with 9.",
  run: (value) => String(value).split("d").join("9"),
});
