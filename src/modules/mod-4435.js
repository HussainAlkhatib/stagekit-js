'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4435",
  name: "Replace \"6\" with \"u\"",
  description: "Replaces every 6 with u.",
  run: (value) => String(value).split("6").join("u"),
});
