'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2442",
  name: "Replace \"z\" with \"P\"",
  description: "Replaces every z with P.",
  run: (value) => String(value).split("z").join("P"),
});
