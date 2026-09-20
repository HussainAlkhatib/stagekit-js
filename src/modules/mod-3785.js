'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3785",
  name: "Replace \"V\" with \"P\"",
  description: "Replaces every V with P.",
  run: (value) => String(value).split("V").join("P"),
});
