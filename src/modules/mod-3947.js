'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3947",
  name: "Replace \"Y\" with \"u\"",
  description: "Replaces every Y with u.",
  run: (value) => String(value).split("Y").join("u"),
});
