'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4268",
  name: "Replace \"3\" with \"K\"",
  description: "Replaces every 3 with K.",
  run: (value) => String(value).split("3").join("K"),
});
