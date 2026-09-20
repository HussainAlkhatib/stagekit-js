'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3637",
  name: "Replace \"T\" with \"p\"",
  description: "Replaces every T with p.",
  run: (value) => String(value).split("T").join("p"),
});
