'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2401",
  name: "Replace \"y\" with \"9\"",
  description: "Replaces every y with 9.",
  run: (value) => String(value).split("y").join("9"),
});
