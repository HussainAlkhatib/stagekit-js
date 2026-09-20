'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1901",
  name: "Replace \"q\" with \"X\"",
  description: "Replaces every q with X.",
  run: (value) => String(value).split("q").join("X"),
});
