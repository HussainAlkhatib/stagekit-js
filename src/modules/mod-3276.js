'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3276",
  name: "Replace \"N\" with \"u\"",
  description: "Replaces every N with u.",
  run: (value) => String(value).split("N").join("u"),
});
