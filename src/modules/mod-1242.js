'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1242",
  name: "Replace \"f\" with \"9\"",
  description: "Replaces every f with 9.",
  run: (value) => String(value).split("f").join("9"),
});
