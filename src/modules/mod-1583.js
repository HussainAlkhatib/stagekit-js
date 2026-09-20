'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1583",
  name: "Replace \"l\" with \"K\"",
  description: "Replaces every l with K.",
  run: (value) => String(value).split("l").join("K"),
});
