'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2364",
  name: "Replace \"y\" with \"x\"",
  description: "Replaces every y with x.",
  run: (value) => String(value).split("y").join("x"),
});
