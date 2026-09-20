'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2163",
  name: "Replace \"v\" with \"f\"",
  description: "Replaces every v with f.",
  run: (value) => String(value).split("v").join("f"),
});
