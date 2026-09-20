'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3399",
  name: "Replace \"P\" with \"v\"",
  description: "Replaces every P with v.",
  run: (value) => String(value).split("P").join("v"),
});
