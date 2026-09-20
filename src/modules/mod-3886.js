'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3886",
  name: "Replace \"X\" with \"u\"",
  description: "Replaces every X with u.",
  run: (value) => String(value).split("X").join("u"),
});
