'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3677",
  name: "Replace \"T\" with \"4\"",
  description: "Replaces every T with 4.",
  run: (value) => String(value).split("T").join("4"),
});
