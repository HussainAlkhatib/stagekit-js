'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2505",
  name: "Replace \"A\" with \"R\"",
  description: "Replaces every A with R.",
  run: (value) => String(value).split("A").join("R"),
});
