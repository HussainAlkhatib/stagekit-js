'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4374",
  name: "Replace \"5\" with \"u\"",
  description: "Replaces every 5 with u.",
  run: (value) => String(value).split("5").join("u"),
});
