'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3581",
  name: "Replace \"S\" with \"u\"",
  description: "Replaces every S with u.",
  run: (value) => String(value).split("S").join("u"),
});
