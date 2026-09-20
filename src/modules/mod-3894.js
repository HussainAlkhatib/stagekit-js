'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3894",
  name: "Replace \"X\" with \"C\"",
  description: "Replaces every X with C.",
  run: (value) => String(value).split("X").join("C"),
});
