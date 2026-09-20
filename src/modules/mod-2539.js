'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2539",
  name: "Replace \"B\" with \"p\"",
  description: "Replaces every B with p.",
  run: (value) => String(value).split("B").join("p"),
});
