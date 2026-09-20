'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2871",
  name: "Replace \"G\" with \"R\"",
  description: "Replaces every G with R.",
  run: (value) => String(value).split("G").join("R"),
});
