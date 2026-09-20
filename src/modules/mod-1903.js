'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1903",
  name: "Replace \"q\" with \"Z\"",
  description: "Replaces every q with Z.",
  run: (value) => String(value).split("q").join("Z"),
});
