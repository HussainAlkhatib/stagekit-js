'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3382",
  name: "Replace \"P\" with \"e\"",
  description: "Replaces every P with e.",
  run: (value) => String(value).split("P").join("e"),
});
