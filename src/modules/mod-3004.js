'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3004",
  name: "Replace \"I\" with \"2\"",
  description: "Replaces every I with 2.",
  run: (value) => String(value).split("I").join("2"),
});
