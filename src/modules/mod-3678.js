'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3678",
  name: "Replace \"T\" with \"5\"",
  description: "Replaces every T with 5.",
  run: (value) => String(value).split("T").join("5"),
});
