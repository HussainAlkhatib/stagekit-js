'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4146",
  name: "Replace \"1\" with \"K\"",
  description: "Replaces every 1 with K.",
  run: (value) => String(value).split("1").join("K"),
});
