'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4565",
  name: "Replace \"8\" with \"C\"",
  description: "Replaces every 8 with C.",
  run: (value) => String(value).split("8").join("C"),
});
