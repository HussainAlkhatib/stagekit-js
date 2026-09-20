'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3008",
  name: "Replace \"I\" with \"6\"",
  description: "Replaces every I with 6.",
  run: (value) => String(value).split("I").join("6"),
});
