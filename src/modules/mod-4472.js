'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4472",
  name: "Replace \"6\" with \"5\"",
  description: "Replaces every 6 with 5.",
  run: (value) => String(value).split("6").join("5"),
});
