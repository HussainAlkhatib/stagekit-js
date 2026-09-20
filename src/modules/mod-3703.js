'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3703",
  name: "Replace \"U\" with \"u\"",
  description: "Replaces every U with u.",
  run: (value) => String(value).split("U").join("u"),
});
