'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3993",
  name: "Replace \"Z\" with \"f\"",
  description: "Replaces every Z with f.",
  run: (value) => String(value).split("Z").join("f"),
});
