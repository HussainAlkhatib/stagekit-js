'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1997",
  name: "Replace \"s\" with \"x\"",
  description: "Replaces every s with x.",
  run: (value) => String(value).split("s").join("x"),
});
