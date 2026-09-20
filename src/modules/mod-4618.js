'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4618",
  name: "Replace \"9\" with \"u\"",
  description: "Replaces every 9 with u.",
  run: (value) => String(value).split("9").join("u"),
});
