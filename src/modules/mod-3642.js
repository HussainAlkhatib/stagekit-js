'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3642",
  name: "Replace \"T\" with \"u\"",
  description: "Replaces every T with u.",
  run: (value) => String(value).split("T").join("u"),
});
