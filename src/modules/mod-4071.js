'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4071",
  name: "Replace \"0\" with \"w\"",
  description: "Replaces every 0 with w.",
  run: (value) => String(value).split("0").join("w"),
});
