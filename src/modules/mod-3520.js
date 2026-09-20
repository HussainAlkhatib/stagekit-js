'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3520",
  name: "Replace \"R\" with \"u\"",
  description: "Replaces every R with u.",
  run: (value) => String(value).split("R").join("u"),
});
