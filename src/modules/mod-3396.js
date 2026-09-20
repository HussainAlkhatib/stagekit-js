'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3396",
  name: "Replace \"P\" with \"s\"",
  description: "Replaces every P with s.",
  run: (value) => String(value).split("P").join("s"),
});
