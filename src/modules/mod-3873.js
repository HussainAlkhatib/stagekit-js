'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3873",
  name: "Replace \"X\" with \"h\"",
  description: "Replaces every X with h.",
  run: (value) => String(value).split("X").join("h"),
});
