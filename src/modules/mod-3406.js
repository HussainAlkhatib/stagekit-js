'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3406",
  name: "Replace \"P\" with \"C\"",
  description: "Replaces every P with C.",
  run: (value) => String(value).split("P").join("C"),
});
