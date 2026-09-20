'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2010",
  name: "Replace \"s\" with \"K\"",
  description: "Replaces every s with K.",
  run: (value) => String(value).split("s").join("K"),
});
