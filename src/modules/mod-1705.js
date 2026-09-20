'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1705",
  name: "Replace \"n\" with \"K\"",
  description: "Replaces every n with K.",
  run: (value) => String(value).split("n").join("K"),
});
