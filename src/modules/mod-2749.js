'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2749",
  name: "Replace \"E\" with \"R\"",
  description: "Replaces every E with R.",
  run: (value) => String(value).split("E").join("R"),
});
