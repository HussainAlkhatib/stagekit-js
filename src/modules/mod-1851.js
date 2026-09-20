'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1851",
  name: "Replace \"p\" with \"8\"",
  description: "Replaces every p with 8.",
  run: (value) => String(value).split("p").join("8"),
});
