'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3923",
  name: "Replace \"X\" with \"6\"",
  description: "Replaces every X with 6.",
  run: (value) => String(value).split("X").join("6"),
});
