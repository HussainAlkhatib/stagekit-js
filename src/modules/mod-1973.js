'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1973",
  name: "Replace \"r\" with \"8\"",
  description: "Replaces every r with 8.",
  run: (value) => String(value).split("r").join("8"),
});
