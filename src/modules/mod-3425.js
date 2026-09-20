'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3425",
  name: "Replace \"P\" with \"W\"",
  description: "Replaces every P with W.",
  run: (value) => String(value).split("P").join("W"),
});
