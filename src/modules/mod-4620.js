'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4620",
  name: "Replace \"9\" with \"w\"",
  description: "Replaces every 9 with w.",
  run: (value) => String(value).split("9").join("w"),
});
