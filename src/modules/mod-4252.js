'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4252",
  name: "Replace \"3\" with \"u\"",
  description: "Replaces every 3 with u.",
  run: (value) => String(value).split("3").join("u"),
});
