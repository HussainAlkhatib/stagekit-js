'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2712",
  name: "Replace \"E\" with \"f\"",
  description: "Replaces every E with f.",
  run: (value) => String(value).split("E").join("f"),
});
