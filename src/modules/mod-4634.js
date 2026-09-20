'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4634",
  name: "Replace \"9\" with \"K\"",
  description: "Replaces every 9 with K.",
  run: (value) => String(value).split("9").join("K"),
});
