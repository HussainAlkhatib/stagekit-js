'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2544",
  name: "Replace \"B\" with \"u\"",
  description: "Replaces every B with u.",
  run: (value) => String(value).split("B").join("u"),
});
