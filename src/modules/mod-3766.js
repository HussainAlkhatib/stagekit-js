'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3766",
  name: "Replace \"V\" with \"w\"",
  description: "Replaces every V with w.",
  run: (value) => String(value).split("V").join("w"),
});
