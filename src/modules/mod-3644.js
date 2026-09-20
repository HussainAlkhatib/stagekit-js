'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3644",
  name: "Replace \"T\" with \"w\"",
  description: "Replaces every T with w.",
  run: (value) => String(value).split("T").join("w"),
});
