'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4642",
  name: "Replace \"9\" with \"S\"",
  description: "Replaces every 9 with S.",
  run: (value) => String(value).split("9").join("S"),
});
