'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2398",
  name: "Replace \"y\" with \"6\"",
  description: "Replaces every y with 6.",
  run: (value) => String(value).split("y").join("6"),
});
