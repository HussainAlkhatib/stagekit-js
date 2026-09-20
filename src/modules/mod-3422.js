'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3422",
  name: "Replace \"P\" with \"T\"",
  description: "Replaces every P with T.",
  run: (value) => String(value).split("P").join("T"),
});
