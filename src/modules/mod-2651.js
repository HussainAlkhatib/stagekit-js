'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2651",
  name: "Replace \"D\" with \"f\"",
  description: "Replaces every D with f.",
  run: (value) => String(value).split("D").join("f"),
});
