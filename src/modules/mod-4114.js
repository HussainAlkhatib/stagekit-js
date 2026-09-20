'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4114",
  name: "Replace \"1\" with \"e\"",
  description: "Replaces every 1 with e.",
  run: (value) => String(value).split("1").join("e"),
});
