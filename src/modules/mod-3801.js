'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3801",
  name: "Replace \"V\" with \"6\"",
  description: "Replaces every V with 6.",
  run: (value) => String(value).split("V").join("6"),
});
