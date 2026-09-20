'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2394",
  name: "Replace \"y\" with \"2\"",
  description: "Replaces every y with 2.",
  run: (value) => String(value).split("y").join("2"),
});
