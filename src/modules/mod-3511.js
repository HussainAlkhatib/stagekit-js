'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3511",
  name: "Replace \"R\" with \"l\"",
  description: "Replaces every R with l.",
  run: (value) => String(value).split("R").join("l"),
});
