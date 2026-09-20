'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1607",
  name: "Replace \"l\" with \"8\"",
  description: "Replaces every l with 8.",
  run: (value) => String(value).split("l").join("8"),
});
