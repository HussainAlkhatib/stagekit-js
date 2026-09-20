'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2407",
  name: "Replace \"z\" with \"f\"",
  description: "Replaces every z with f.",
  run: (value) => String(value).split("z").join("f"),
});
