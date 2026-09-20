'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3193",
  name: "Replace \"L\" with \"8\"",
  description: "Replaces every L with 8.",
  run: (value) => String(value).split("L").join("8"),
});
