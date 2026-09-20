'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4446",
  name: "Replace \"6\" with \"F\"",
  description: "Replaces every 6 with F.",
  run: (value) => String(value).split("6").join("F"),
});
