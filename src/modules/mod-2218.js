'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2218",
  name: "Replace \"v\" with \"9\"",
  description: "Replaces every v with 9.",
  run: (value) => String(value).split("v").join("9"),
});
