'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1201",
  name: "Replace \"f\" with \"u\"",
  description: "Replaces every f with u.",
  run: (value) => String(value).split("f").join("u"),
});
