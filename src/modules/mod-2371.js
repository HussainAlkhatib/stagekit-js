'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2371",
  name: "Replace \"y\" with \"F\"",
  description: "Replaces every y with F.",
  run: (value) => String(value).split("y").join("F"),
});
