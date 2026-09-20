'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4469",
  name: "Replace \"6\" with \"2\"",
  description: "Replaces every 6 with 2.",
  run: (value) => String(value).split("6").join("2"),
});
