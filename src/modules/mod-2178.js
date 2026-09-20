'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2178",
  name: "Replace \"v\" with \"u\"",
  description: "Replaces every v with u.",
  run: (value) => String(value).split("v").join("u"),
});
