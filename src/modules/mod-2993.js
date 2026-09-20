'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2993",
  name: "Replace \"I\" with \"R\"",
  description: "Replaces every I with R.",
  run: (value) => String(value).split("I").join("R"),
});
