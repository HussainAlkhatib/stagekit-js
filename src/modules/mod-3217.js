'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3217",
  name: "Replace \"M\" with \"w\"",
  description: "Replaces every M with w.",
  run: (value) => String(value).split("M").join("w"),
});
