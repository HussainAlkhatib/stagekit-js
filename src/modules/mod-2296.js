'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2296",
  name: "Replace \"x\" with \"q\"",
  description: "Replaces every x with q.",
  run: (value) => String(value).split("x").join("q"),
});
