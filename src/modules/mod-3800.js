'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3800",
  name: "Replace \"V\" with \"5\"",
  description: "Replaces every V with 5.",
  run: (value) => String(value).split("V").join("5"),
});
