'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2519",
  name: "Replace \"A\" with \"5\"",
  description: "Replaces every A with 5.",
  run: (value) => String(value).split("A").join("5"),
});
