'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2580",
  name: "Replace \"B\" with \"5\"",
  description: "Replaces every B with 5.",
  run: (value) => String(value).split("B").join("5"),
});
