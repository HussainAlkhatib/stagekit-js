'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4193",
  name: "Replace \"2\" with \"w\"",
  description: "Replaces every 2 with w.",
  run: (value) => String(value).split("2").join("w"),
});
