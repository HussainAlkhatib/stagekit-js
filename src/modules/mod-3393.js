'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3393",
  name: "Replace \"P\" with \"p\"",
  description: "Replaces every P with p.",
  run: (value) => String(value).split("P").join("p"),
});
