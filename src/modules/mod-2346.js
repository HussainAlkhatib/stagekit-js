'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2346",
  name: "Replace \"y\" with \"f\"",
  description: "Replaces every y with f.",
  run: (value) => String(value).split("y").join("f"),
});
