'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3932",
  name: "Replace \"Y\" with \"f\"",
  description: "Replaces every Y with f.",
  run: (value) => String(value).split("Y").join("f"),
});
