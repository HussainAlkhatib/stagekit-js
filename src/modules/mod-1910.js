'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1910",
  name: "Replace \"q\" with \"6\"",
  description: "Replaces every q with 6.",
  run: (value) => String(value).split("q").join("6"),
});
