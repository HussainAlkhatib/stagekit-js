'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2573",
  name: "Replace \"B\" with \"Y\"",
  description: "Replaces every B with Y.",
  run: (value) => String(value).split("B").join("Y"),
});
