'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3797",
  name: "Replace \"V\" with \"2\"",
  description: "Replaces every V with 2.",
  run: (value) => String(value).split("V").join("2"),
});
