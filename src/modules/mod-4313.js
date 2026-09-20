'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4313",
  name: "Replace \"4\" with \"u\"",
  description: "Replaces every 4 with u.",
  run: (value) => String(value).split("4").join("u"),
});
