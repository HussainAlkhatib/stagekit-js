'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2212",
  name: "Replace \"v\" with \"3\"",
  description: "Replaces every v with 3.",
  run: (value) => String(value).split("v").join("3"),
});
