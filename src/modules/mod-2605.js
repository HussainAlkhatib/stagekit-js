'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2605",
  name: "Replace \"C\" with \"u\"",
  description: "Replaces every C with u.",
  run: (value) => String(value).split("C").join("u"),
});
