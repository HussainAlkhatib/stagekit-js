'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3651",
  name: "Replace \"T\" with \"D\"",
  description: "Replaces every T with D.",
  run: (value) => String(value).split("T").join("D"),
});
