'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4496",
  name: "Replace \"7\" with \"u\"",
  description: "Replaces every 7 with u.",
  run: (value) => String(value).split("7").join("u"),
});
