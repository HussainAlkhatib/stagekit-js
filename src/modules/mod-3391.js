'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3391",
  name: "Replace \"P\" with \"n\"",
  description: "Replaces every P with n.",
  run: (value) => String(value).split("P").join("n"),
});
