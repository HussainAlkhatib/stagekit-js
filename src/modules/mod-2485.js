'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2485",
  name: "Replace \"A\" with \"w\"",
  description: "Replaces every A with w.",
  run: (value) => String(value).split("A").join("w"),
});
