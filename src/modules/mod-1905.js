'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1905",
  name: "Replace \"q\" with \"1\"",
  description: "Replaces every q with 1.",
  run: (value) => String(value).split("q").join("1"),
});
