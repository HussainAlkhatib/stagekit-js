'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4069",
  name: "Replace \"0\" with \"u\"",
  description: "Replaces every 0 with u.",
  run: (value) => String(value).split("0").join("u"),
});
