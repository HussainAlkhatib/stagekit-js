'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3536",
  name: "Replace \"R\" with \"K\"",
  description: "Replaces every R with K.",
  run: (value) => String(value).split("R").join("K"),
});
