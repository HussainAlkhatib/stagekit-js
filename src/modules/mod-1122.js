'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1122",
  name: "Replace \"e\" with \"K\"",
  description: "Replaces every e with K.",
  run: (value) => String(value).split("e").join("K"),
});
