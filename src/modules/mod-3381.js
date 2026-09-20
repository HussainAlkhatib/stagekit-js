'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3381",
  name: "Replace \"P\" with \"d\"",
  description: "Replaces every P with d.",
  run: (value) => String(value).split("P").join("d"),
});
