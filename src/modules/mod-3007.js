'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3007",
  name: "Replace \"I\" with \"5\"",
  description: "Replaces every I with 5.",
  run: (value) => String(value).split("I").join("5"),
});
