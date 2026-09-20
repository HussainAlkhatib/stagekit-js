'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4534",
  name: "Replace \"7\" with \"6\"",
  description: "Replaces every 7 with 6.",
  run: (value) => String(value).split("7").join("6"),
});
