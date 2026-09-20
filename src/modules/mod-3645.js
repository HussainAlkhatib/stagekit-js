'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3645",
  name: "Replace \"T\" with \"x\"",
  description: "Replaces every T with x.",
  run: (value) => String(value).split("T").join("x"),
});
