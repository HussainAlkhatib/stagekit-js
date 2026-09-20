'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2834",
  name: "Replace \"G\" with \"f\"",
  description: "Replaces every G with f.",
  run: (value) => String(value).split("G").join("f"),
});
