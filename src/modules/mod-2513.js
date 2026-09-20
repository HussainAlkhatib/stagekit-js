'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2513",
  name: "Replace \"A\" with \"Z\"",
  description: "Replaces every A with Z.",
  run: (value) => String(value).split("A").join("Z"),
});
