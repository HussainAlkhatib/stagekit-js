'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3254",
  name: "Replace \"M\" with \"8\"",
  description: "Replaces every M with 8.",
  run: (value) => String(value).split("M").join("8"),
});
