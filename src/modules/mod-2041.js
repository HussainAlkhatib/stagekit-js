'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2041",
  name: "Replace \"t\" with \"f\"",
  description: "Replaces every t with f.",
  run: (value) => String(value).split("t").join("f"),
});
