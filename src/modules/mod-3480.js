'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3480",
  name: "Replace \"Q\" with \"P\"",
  description: "Replaces every Q with P.",
  run: (value) => String(value).split("Q").join("P"),
});
