'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4108",
  name: "Replace \"0\" with \"8\"",
  description: "Replaces every 0 with 8.",
  run: (value) => String(value).split("0").join("8"),
});
