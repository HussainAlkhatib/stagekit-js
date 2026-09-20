'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4085",
  name: "Replace \"0\" with \"K\"",
  description: "Replaces every 0 with K.",
  run: (value) => String(value).split("0").join("K"),
});
