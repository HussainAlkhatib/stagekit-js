'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2577",
  name: "Replace \"B\" with \"2\"",
  description: "Replaces every B with 2.",
  run: (value) => String(value).split("B").join("2"),
});
