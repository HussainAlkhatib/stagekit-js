'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1729",
  name: "Replace \"n\" with \"8\"",
  description: "Replaces every n with 8.",
  run: (value) => String(value).split("n").join("8"),
});
