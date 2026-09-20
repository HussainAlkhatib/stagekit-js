'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0891",
  name: "Replace \"d\" with \"u\"",
  description: "Replaces every d with u.",
  run: (value) => String(value).split("d").join("u"),
});
