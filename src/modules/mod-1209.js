'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1209",
  name: "Replace \"f\" with \"C\"",
  description: "Replaces every f with C.",
  run: (value) => String(value).split("f").join("C"),
});
