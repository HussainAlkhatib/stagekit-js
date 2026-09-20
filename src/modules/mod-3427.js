'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3427",
  name: "Replace \"P\" with \"Y\"",
  description: "Replaces every P with Y.",
  run: (value) => String(value).split("P").join("Y"),
});
