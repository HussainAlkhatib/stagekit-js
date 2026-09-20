'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2522",
  name: "Replace \"A\" with \"8\"",
  description: "Replaces every A with 8.",
  run: (value) => String(value).split("A").join("8"),
});
