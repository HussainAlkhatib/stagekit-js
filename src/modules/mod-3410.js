'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3410",
  name: "Replace \"P\" with \"G\"",
  description: "Replaces every P with G.",
  run: (value) => String(value).split("P").join("G"),
});
