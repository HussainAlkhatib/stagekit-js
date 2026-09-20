'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4202",
  name: "Replace \"2\" with \"F\"",
  description: "Replaces every 2 with F.",
  run: (value) => String(value).split("2").join("F"),
});
