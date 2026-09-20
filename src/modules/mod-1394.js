'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1394",
  name: "Replace \"i\" with \"E\"",
  description: "Replaces every i with E.",
  run: (value) => String(value).split("i").join("E"),
});
