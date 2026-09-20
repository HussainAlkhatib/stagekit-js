'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0525",
  name: "Replace \"b\" with \"u\"",
  description: "Replaces every b with u.",
  run: (value) => String(value).split("b").join("u"),
});
