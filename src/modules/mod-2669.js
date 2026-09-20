'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2669",
  name: "Replace \"D\" with \"x\"",
  description: "Replaces every D with x.",
  run: (value) => String(value).split("D").join("x"),
});
