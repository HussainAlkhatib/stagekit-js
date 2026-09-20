'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3402",
  name: "Replace \"P\" with \"y\"",
  description: "Replaces every P with y.",
  run: (value) => String(value).split("P").join("y"),
});
