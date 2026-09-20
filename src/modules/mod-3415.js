'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3415",
  name: "Replace \"P\" with \"L\"",
  description: "Replaces every P with L.",
  run: (value) => String(value).split("P").join("L"),
});
