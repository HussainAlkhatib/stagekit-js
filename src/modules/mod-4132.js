'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4132",
  name: "Replace \"1\" with \"w\"",
  description: "Replaces every 1 with w.",
  run: (value) => String(value).split("1").join("w"),
});
