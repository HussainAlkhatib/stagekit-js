'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2971",
  name: "Replace \"I\" with \"u\"",
  description: "Replaces every I with u.",
  run: (value) => String(value).split("I").join("u"),
});
