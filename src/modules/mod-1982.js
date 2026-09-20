'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1982",
  name: "Replace \"s\" with \"h\"",
  description: "Replaces every s with h.",
  run: (value) => String(value).split("s").join("h"),
});
