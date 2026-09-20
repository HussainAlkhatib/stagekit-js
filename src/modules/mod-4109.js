'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4109",
  name: "Replace \"0\" with \"9\"",
  description: "Replaces every 0 with 9.",
  run: (value) => String(value).split("0").join("9"),
});
