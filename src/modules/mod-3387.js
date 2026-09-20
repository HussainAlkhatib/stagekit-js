'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3387",
  name: "Replace \"P\" with \"j\"",
  description: "Replaces every P with j.",
  run: (value) => String(value).split("P").join("j"),
});
