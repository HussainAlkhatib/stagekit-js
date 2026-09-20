'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3592",
  name: "Replace \"S\" with \"F\"",
  description: "Replaces every S with F.",
  run: (value) => String(value).split("S").join("F"),
});
