'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2546",
  name: "Replace \"B\" with \"w\"",
  description: "Replaces every B with w.",
  run: (value) => String(value).split("B").join("w"),
});
