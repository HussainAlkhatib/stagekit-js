'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3885",
  name: "Replace \"X\" with \"t\"",
  description: "Replaces every X with t.",
  run: (value) => String(value).split("X").join("t"),
});
