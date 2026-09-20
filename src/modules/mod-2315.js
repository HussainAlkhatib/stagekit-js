'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2315",
  name: "Replace \"x\" with \"K\"",
  description: "Replaces every x with K.",
  run: (value) => String(value).split("x").join("K"),
});
