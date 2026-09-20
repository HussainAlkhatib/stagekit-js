'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2193",
  name: "Replace \"v\" with \"K\"",
  description: "Replaces every v with K.",
  run: (value) => String(value).split("v").join("K"),
});
