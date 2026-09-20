'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1996",
  name: "Replace \"s\" with \"w\"",
  description: "Replaces every s with w.",
  run: (value) => String(value).split("s").join("w"),
});
