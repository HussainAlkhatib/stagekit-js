'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2982",
  name: "Replace \"I\" with \"F\"",
  description: "Replaces every I with F.",
  run: (value) => String(value).split("I").join("F"),
});
