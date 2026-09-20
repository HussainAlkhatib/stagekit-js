'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3620",
  name: "Replace \"S\" with \"8\"",
  description: "Replaces every S with 8.",
  run: (value) => String(value).split("S").join("8"),
});
