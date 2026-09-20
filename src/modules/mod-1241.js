'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1241",
  name: "Replace \"f\" with \"8\"",
  description: "Replaces every f with 8.",
  run: (value) => String(value).split("f").join("8"),
});
