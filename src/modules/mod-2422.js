'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2422",
  name: "Replace \"z\" with \"u\"",
  description: "Replaces every z with u.",
  run: (value) => String(value).split("z").join("u"),
});
