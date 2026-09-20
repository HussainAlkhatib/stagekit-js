'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2531",
  name: "Replace \"B\" with \"h\"",
  description: "Replaces every B with h.",
  run: (value) => String(value).split("B").join("h"),
});
