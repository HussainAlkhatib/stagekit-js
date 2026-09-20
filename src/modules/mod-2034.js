'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2034",
  name: "Replace \"s\" with \"8\"",
  description: "Replaces every s with 8.",
  run: (value) => String(value).split("s").join("8"),
});
