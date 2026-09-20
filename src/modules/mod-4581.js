'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4581",
  name: "Replace \"8\" with \"S\"",
  description: "Replaces every 8 with S.",
  run: (value) => String(value).split("8").join("S"),
});
