'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3003",
  name: "Replace \"I\" with \"1\"",
  description: "Replaces every I with 1.",
  run: (value) => String(value).split("I").join("1"),
});
