'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2215",
  name: "Replace \"v\" with \"6\"",
  description: "Replaces every v with 6.",
  run: (value) => String(value).split("v").join("6"),
});
