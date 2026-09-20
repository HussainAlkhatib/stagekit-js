'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3902",
  name: "Replace \"X\" with \"K\"",
  description: "Replaces every X with K.",
  run: (value) => String(value).split("X").join("K"),
});
