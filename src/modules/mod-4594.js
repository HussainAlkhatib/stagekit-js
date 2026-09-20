'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4594",
  name: "Replace \"8\" with \"5\"",
  description: "Replaces every 8 with 5.",
  run: (value) => String(value).split("8").join("5"),
});
