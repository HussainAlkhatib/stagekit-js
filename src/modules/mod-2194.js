'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2194",
  name: "Replace \"v\" with \"L\"",
  description: "Replaces every v with L.",
  run: (value) => String(value).split("v").join("L"),
});
