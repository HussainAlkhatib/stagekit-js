'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1074",
  name: "Replace \"e\" with \"u\"",
  description: "Replaces every e with u.",
  run: (value) => String(value).split("e").join("u"),
});
