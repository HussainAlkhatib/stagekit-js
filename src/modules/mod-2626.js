'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2626",
  name: "Replace \"C\" with \"Q\"",
  description: "Replaces every C with Q.",
  run: (value) => String(value).split("C").join("Q"),
});
