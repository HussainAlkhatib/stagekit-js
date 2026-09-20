'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2520",
  name: "Replace \"A\" with \"6\"",
  description: "Replaces every A with 6.",
  run: (value) => String(value).split("A").join("6"),
});
