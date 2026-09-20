'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3429",
  name: "Replace \"P\" with \"0\"",
  description: "Replaces every P with 0.",
  run: (value) => String(value).split("P").join("0"),
});
