'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2210",
  name: "Replace \"v\" with \"1\"",
  description: "Replaces every v with 1.",
  run: (value) => String(value).split("v").join("1"),
});
