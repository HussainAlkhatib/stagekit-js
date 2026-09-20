'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3950",
  name: "Replace \"Y\" with \"x\"",
  description: "Replaces every Y with x.",
  run: (value) => String(value).split("Y").join("x"),
});
