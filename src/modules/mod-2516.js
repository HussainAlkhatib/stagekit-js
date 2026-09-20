'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2516",
  name: "Replace \"A\" with \"2\"",
  description: "Replaces every A with 2.",
  run: (value) => String(value).split("A").join("2"),
});
