'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2966",
  name: "Replace \"I\" with \"p\"",
  description: "Replaces every I with p.",
  run: (value) => String(value).split("I").join("p"),
});
