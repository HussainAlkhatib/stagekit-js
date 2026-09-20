'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1888",
  name: "Replace \"q\" with \"K\"",
  description: "Replaces every q with K.",
  run: (value) => String(value).split("q").join("K"),
});
