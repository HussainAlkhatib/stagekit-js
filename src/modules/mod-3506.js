'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3506",
  name: "Replace \"R\" with \"g\"",
  description: "Replaces every R with g.",
  run: (value) => String(value).split("R").join("g"),
});
