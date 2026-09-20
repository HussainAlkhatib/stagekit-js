'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4008",
  name: "Replace \"Z\" with \"u\"",
  description: "Replaces every Z with u.",
  run: (value) => String(value).split("Z").join("u"),
});
