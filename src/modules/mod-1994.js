'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1994",
  name: "Replace \"s\" with \"u\"",
  description: "Replaces every s with u.",
  run: (value) => String(value).split("s").join("u"),
});
