'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2397",
  name: "Replace \"y\" with \"5\"",
  description: "Replaces every y with 5.",
  run: (value) => String(value).split("y").join("5"),
});
