'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2607",
  name: "Replace \"C\" with \"w\"",
  description: "Replaces every C with w.",
  run: (value) => String(value).split("C").join("w"),
});
