'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4130",
  name: "Replace \"1\" with \"u\"",
  description: "Replaces every 1 with u.",
  run: (value) => String(value).split("1").join("u"),
});
