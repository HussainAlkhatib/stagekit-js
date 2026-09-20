'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1974",
  name: "Replace \"r\" with \"9\"",
  description: "Replaces every r with 9.",
  run: (value) => String(value).split("r").join("9"),
});
