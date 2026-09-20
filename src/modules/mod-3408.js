'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3408",
  name: "Replace \"P\" with \"E\"",
  description: "Replaces every P with E.",
  run: (value) => String(value).split("P").join("E"),
});
