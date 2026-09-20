'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4530",
  name: "Replace \"7\" with \"2\"",
  description: "Replaces every 7 with 2.",
  run: (value) => String(value).split("7").join("2"),
});
