'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2644",
  name: "Replace \"C\" with \"8\"",
  description: "Replaces every C with 8.",
  run: (value) => String(value).split("C").join("8"),
});
