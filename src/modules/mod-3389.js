'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3389",
  name: "Replace \"P\" with \"l\"",
  description: "Replaces every P with l.",
  run: (value) => String(value).split("P").join("l"),
});
