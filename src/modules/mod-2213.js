'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2213",
  name: "Replace \"v\" with \"4\"",
  description: "Replaces every v with 4.",
  run: (value) => String(value).split("v").join("4"),
});
