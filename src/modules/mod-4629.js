'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4629",
  name: "Replace \"9\" with \"F\"",
  description: "Replaces every 9 with F.",
  run: (value) => String(value).split("9").join("F"),
});
