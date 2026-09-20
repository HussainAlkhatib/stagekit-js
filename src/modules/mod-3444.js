'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3444",
  name: "Replace \"Q\" with \"f\"",
  description: "Replaces every Q with f.",
  run: (value) => String(value).split("Q").join("f"),
});
