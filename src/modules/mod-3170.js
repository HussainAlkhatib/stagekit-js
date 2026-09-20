'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3170",
  name: "Replace \"L\" with \"K\"",
  description: "Replaces every L with K.",
  run: (value) => String(value).split("L").join("K"),
});
