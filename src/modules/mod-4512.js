'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4512",
  name: "Replace \"7\" with \"K\"",
  description: "Replaces every 7 with K.",
  run: (value) => String(value).split("7").join("K"),
});
