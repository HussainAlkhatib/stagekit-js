'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2102",
  name: "Replace \"u\" with \"f\"",
  description: "Replaces every u with f.",
  run: (value) => String(value).split("u").join("f"),
});
