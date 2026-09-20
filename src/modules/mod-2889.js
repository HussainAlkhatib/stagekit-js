'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2889",
  name: "Replace \"G\" with \"9\"",
  description: "Replaces every G with 9.",
  run: (value) => String(value).split("G").join("9"),
});
