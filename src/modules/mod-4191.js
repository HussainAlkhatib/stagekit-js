'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4191",
  name: "Replace \"2\" with \"u\"",
  description: "Replaces every 2 with u.",
  run: (value) => String(value).split("2").join("u"),
});
