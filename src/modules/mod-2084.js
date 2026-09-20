'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2084",
  name: "Replace \"t\" with \"X\"",
  description: "Replaces every t with X.",
  run: (value) => String(value).split("t").join("X"),
});
