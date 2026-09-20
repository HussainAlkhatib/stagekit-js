'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4273",
  name: "Replace \"3\" with \"P\"",
  description: "Replaces every 3 with P.",
  run: (value) => String(value).split("3").join("P"),
});
