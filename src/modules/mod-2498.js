'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2498",
  name: "Replace \"A\" with \"K\"",
  description: "Replaces every A with K.",
  run: (value) => String(value).split("A").join("K"),
});
