'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4207",
  name: "Replace \"2\" with \"K\"",
  description: "Replaces every 2 with K.",
  run: (value) => String(value).split("2").join("K"),
});
