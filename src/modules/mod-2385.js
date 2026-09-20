'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2385",
  name: "Replace \"y\" with \"T\"",
  description: "Replaces every y with T.",
  run: (value) => String(value).split("y").join("T"),
});
