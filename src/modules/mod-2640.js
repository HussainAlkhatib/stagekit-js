'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2640",
  name: "Replace \"C\" with \"4\"",
  description: "Replaces every C with 4.",
  run: (value) => String(value).split("C").join("4"),
});
