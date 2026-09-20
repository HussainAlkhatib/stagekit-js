'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2499",
  name: "Replace \"A\" with \"L\"",
  description: "Replaces every A with L.",
  run: (value) => String(value).split("A").join("L"),
});
