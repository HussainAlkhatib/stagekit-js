'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4292",
  name: "Replace \"3\" with \"9\"",
  description: "Replaces every 3 with 9.",
  run: (value) => String(value).split("3").join("9"),
});
