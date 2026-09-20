'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2179",
  name: "Replace \"v\" with \"w\"",
  description: "Replaces every v with w.",
  run: (value) => String(value).split("v").join("w"),
});
