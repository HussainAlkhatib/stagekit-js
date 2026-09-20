'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4471",
  name: "Replace \"6\" with \"4\"",
  description: "Replaces every 6 with 4.",
  run: (value) => String(value).split("6").join("4"),
});
