'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1354",
  name: "Replace \"h\" with \"Z\"",
  description: "Replaces every h with Z.",
  run: (value) => String(value).split("h").join("Z"),
});
