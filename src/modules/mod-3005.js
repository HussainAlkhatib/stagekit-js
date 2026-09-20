'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3005",
  name: "Replace \"I\" with \"3\"",
  description: "Replaces every I with 3.",
  run: (value) => String(value).split("I").join("3"),
});
