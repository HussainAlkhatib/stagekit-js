'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2501",
  name: "Replace \"A\" with \"N\"",
  description: "Replaces every A with N.",
  run: (value) => String(value).split("A").join("N"),
});
