'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0900",
  name: "Replace \"d\" with \"x\"",
  description: "Replaces every d with x.",
  run: (value) => String(value).split("d").join("x"),
});
