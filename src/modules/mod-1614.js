'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1614",
  name: "Replace \"m\" with \"f\"",
  description: "Replaces every m with f.",
  run: (value) => String(value).split("m").join("f"),
});
