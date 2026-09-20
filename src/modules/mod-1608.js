'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1608",
  name: "Replace \"l\" with \"9\"",
  description: "Replaces every l with 9.",
  run: (value) => String(value).split("l").join("9"),
});
