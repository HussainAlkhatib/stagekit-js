'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2592",
  name: "Replace \"C\" with \"h\"",
  description: "Replaces every C with h.",
  run: (value) => String(value).split("C").join("h"),
});
