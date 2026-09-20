'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2363",
  name: "Replace \"y\" with \"w\"",
  description: "Replaces every y with w.",
  run: (value) => String(value).split("y").join("w"),
});
