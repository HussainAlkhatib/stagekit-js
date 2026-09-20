'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2553",
  name: "Replace \"B\" with \"E\"",
  description: "Replaces every B with E.",
  run: (value) => String(value).split("B").join("E"),
});
