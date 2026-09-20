'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3787",
  name: "Replace \"V\" with \"R\"",
  description: "Replaces every V with R.",
  run: (value) => String(value).split("V").join("R"),
});
