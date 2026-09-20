'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4010",
  name: "Replace \"Z\" with \"w\"",
  description: "Replaces every Z with w.",
  run: (value) => String(value).split("Z").join("w"),
});
