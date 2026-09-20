'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3244",
  name: "Replace \"M\" with \"Y\"",
  description: "Replaces every M with Y.",
  run: (value) => String(value).split("M").join("Y"),
});
