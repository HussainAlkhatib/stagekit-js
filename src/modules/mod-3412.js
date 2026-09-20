'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3412",
  name: "Replace \"P\" with \"I\"",
  description: "Replaces every P with I.",
  run: (value) => String(value).split("P").join("I"),
});
