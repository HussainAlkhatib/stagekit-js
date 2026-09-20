'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1689",
  name: "Replace \"n\" with \"u\"",
  description: "Replaces every n with u.",
  run: (value) => String(value).split("n").join("u"),
});
