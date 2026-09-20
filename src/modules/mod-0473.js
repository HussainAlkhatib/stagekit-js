'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0473",
  name: "Replace \"b\" with \"h\"",
  description: "Replaces every b with h.",
  run: (value) => String(value).split("b").join("h"),
});
