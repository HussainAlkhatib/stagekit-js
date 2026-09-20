'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1811",
  name: "Replace \"p\" with \"u\"",
  description: "Replaces every p with u.",
  run: (value) => String(value).split("p").join("u"),
});
