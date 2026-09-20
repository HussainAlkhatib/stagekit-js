'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2217",
  name: "Replace \"v\" with \"8\"",
  description: "Replaces every v with 8.",
  run: (value) => String(value).split("v").join("8"),
});
