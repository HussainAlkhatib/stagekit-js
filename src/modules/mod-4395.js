'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4395",
  name: "Replace \"5\" with \"P\"",
  description: "Replaces every 5 with P.",
  run: (value) => String(value).split("5").join("P"),
});
