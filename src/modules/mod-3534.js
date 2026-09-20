'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3534",
  name: "Replace \"R\" with \"I\"",
  description: "Replaces every R with I.",
  run: (value) => String(value).split("R").join("I"),
});
