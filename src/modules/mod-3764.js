'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3764",
  name: "Replace \"V\" with \"u\"",
  description: "Replaces every V with u.",
  run: (value) => String(value).split("V").join("u"),
});
