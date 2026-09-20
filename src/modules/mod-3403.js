'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3403",
  name: "Replace \"P\" with \"z\"",
  description: "Replaces every P with z.",
  run: (value) => String(value).split("P").join("z"),
});
