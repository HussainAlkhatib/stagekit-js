'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4231",
  name: "Replace \"2\" with \"9\"",
  description: "Replaces every 2 with 9.",
  run: (value) => String(value).split("2").join("9"),
});
