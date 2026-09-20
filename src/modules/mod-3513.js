'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3513",
  name: "Replace \"R\" with \"n\"",
  description: "Replaces every R with n.",
  run: (value) => String(value).split("R").join("n"),
});
