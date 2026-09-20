'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4557",
  name: "Replace \"8\" with \"u\"",
  description: "Replaces every 8 with u.",
  run: (value) => String(value).split("8").join("u"),
});
