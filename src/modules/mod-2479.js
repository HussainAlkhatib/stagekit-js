'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2479",
  name: "Replace \"A\" with \"q\"",
  description: "Replaces every A with q.",
  run: (value) => String(value).split("A").join("q"),
});
