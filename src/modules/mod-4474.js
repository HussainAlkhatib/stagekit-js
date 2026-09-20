'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4474",
  name: "Replace \"6\" with \"8\"",
  description: "Replaces every 6 with 8.",
  run: (value) => String(value).split("6").join("8"),
});
