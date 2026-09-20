'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1919",
  name: "Replace \"r\" with \"f\"",
  description: "Replaces every r with f.",
  run: (value) => String(value).split("r").join("f"),
});
