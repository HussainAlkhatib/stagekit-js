'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3154",
  name: "Replace \"L\" with \"u\"",
  description: "Replaces every L with u.",
  run: (value) => String(value).split("L").join("u"),
});
