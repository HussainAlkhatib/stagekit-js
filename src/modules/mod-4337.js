'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4337",
  name: "Replace \"4\" with \"S\"",
  description: "Replaces every 4 with S.",
  run: (value) => String(value).split("4").join("S"),
});
