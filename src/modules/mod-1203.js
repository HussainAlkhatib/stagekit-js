'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1203",
  name: "Replace \"f\" with \"w\"",
  description: "Replaces every f with w.",
  run: (value) => String(value).split("f").join("w"),
});
