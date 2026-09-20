'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3968",
  name: "Replace \"Y\" with \"P\"",
  description: "Replaces every Y with P.",
  run: (value) => String(value).split("Y").join("P"),
});
