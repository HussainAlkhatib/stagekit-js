'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2613",
  name: "Replace \"C\" with \"D\"",
  description: "Replaces every C with D.",
  run: (value) => String(value).split("C").join("D"),
});
