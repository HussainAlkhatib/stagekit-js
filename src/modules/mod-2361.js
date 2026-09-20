'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2361",
  name: "Replace \"y\" with \"u\"",
  description: "Replaces every y with u.",
  run: (value) => String(value).split("y").join("u"),
});
