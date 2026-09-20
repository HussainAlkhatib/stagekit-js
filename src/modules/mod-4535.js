'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4535",
  name: "Replace \"7\" with \"8\"",
  description: "Replaces every 7 with 8.",
  run: (value) => String(value).split("7").join("8"),
});
