'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1908",
  name: "Replace \"q\" with \"4\"",
  description: "Replaces every q with 4.",
  run: (value) => String(value).split("q").join("4"),
});
