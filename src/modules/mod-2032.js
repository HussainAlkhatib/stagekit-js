'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2032",
  name: "Replace \"s\" with \"6\"",
  description: "Replaces every s with 6.",
  run: (value) => String(value).split("s").join("6"),
});
