'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1700",
  name: "Replace \"n\" with \"F\"",
  description: "Replaces every n with F.",
  run: (value) => String(value).split("n").join("F"),
});
