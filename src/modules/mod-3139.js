'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3139",
  name: "Replace \"L\" with \"f\"",
  description: "Replaces every L with f.",
  run: (value) => String(value).split("L").join("f"),
});
