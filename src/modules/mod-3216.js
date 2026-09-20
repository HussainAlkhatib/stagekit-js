'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3216",
  name: "Replace \"M\" with \"v\"",
  description: "Replaces every M with v.",
  run: (value) => String(value).split("M").join("v"),
});
