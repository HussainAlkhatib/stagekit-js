'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2788",
  name: "Replace \"F\" with \"u\"",
  description: "Replaces every F with u.",
  run: (value) => String(value).split("F").join("u"),
});
