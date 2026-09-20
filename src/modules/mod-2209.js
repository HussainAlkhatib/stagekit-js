'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2209",
  name: "Replace \"v\" with \"0\"",
  description: "Replaces every v with 0.",
  run: (value) => String(value).split("v").join("0"),
});
