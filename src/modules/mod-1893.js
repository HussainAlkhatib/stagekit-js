'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1893",
  name: "Replace \"q\" with \"P\"",
  description: "Replaces every q with P.",
  run: (value) => String(value).split("q").join("P"),
});
