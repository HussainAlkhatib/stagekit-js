'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4321",
  name: "Replace \"4\" with \"C\"",
  description: "Replaces every 4 with C.",
  run: (value) => String(value).split("4").join("C"),
});
