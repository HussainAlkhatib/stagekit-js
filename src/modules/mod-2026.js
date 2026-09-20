'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2026",
  name: "Replace \"s\" with \"0\"",
  description: "Replaces every s with 0.",
  run: (value) => String(value).split("s").join("0"),
});
