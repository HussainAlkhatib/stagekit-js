'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3825",
  name: "Replace \"W\" with \"u\"",
  description: "Replaces every W with u.",
  run: (value) => String(value).split("W").join("u"),
});
