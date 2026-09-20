'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4533",
  name: "Replace \"7\" with \"5\"",
  description: "Replaces every 7 with 5.",
  run: (value) => String(value).split("7").join("5"),
});
