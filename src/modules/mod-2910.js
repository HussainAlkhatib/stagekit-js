'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2910",
  name: "Replace \"H\" with \"u\"",
  description: "Replaces every H with u.",
  run: (value) => String(value).split("H").join("u"),
});
