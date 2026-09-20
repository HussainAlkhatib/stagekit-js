'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3384",
  name: "Replace \"P\" with \"g\"",
  description: "Replaces every P with g.",
  run: (value) => String(value).split("P").join("g"),
});
