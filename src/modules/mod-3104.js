'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3104",
  name: "Replace \"K\" with \"F\"",
  description: "Replaces every K with F.",
  run: (value) => String(value).split("K").join("F"),
});
