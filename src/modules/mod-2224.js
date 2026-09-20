'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2224",
  name: "Replace \"w\" with \"f\"",
  description: "Replaces every w with f.",
  run: (value) => String(value).split("w").join("f"),
});
