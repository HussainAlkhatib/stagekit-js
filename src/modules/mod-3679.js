'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3679",
  name: "Replace \"T\" with \"6\"",
  description: "Replaces every T with 6.",
  run: (value) => String(value).split("T").join("6"),
});
