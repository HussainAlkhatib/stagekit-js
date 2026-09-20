'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1567",
  name: "Replace \"l\" with \"u\"",
  description: "Replaces every l with u.",
  run: (value) => String(value).split("l").join("u"),
});
