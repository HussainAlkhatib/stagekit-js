'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3759",
  name: "Replace \"V\" with \"p\"",
  description: "Replaces every V with p.",
  run: (value) => String(value).split("V").join("p"),
});
