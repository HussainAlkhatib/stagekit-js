'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1865",
  name: "Replace \"q\" with \"m\"",
  description: "Replaces every q with m.",
  run: (value) => String(value).split("q").join("m"),
});
