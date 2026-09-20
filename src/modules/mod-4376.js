'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4376",
  name: "Replace \"5\" with \"w\"",
  description: "Replaces every 5 with w.",
  run: (value) => String(value).split("5").join("w"),
});
