'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2617",
  name: "Replace \"C\" with \"H\"",
  description: "Replaces every C with H.",
  run: (value) => String(value).split("C").join("H"),
});
