'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3629",
  name: "Replace \"T\" with \"h\"",
  description: "Replaces every T with h.",
  run: (value) => String(value).split("T").join("h"),
});
