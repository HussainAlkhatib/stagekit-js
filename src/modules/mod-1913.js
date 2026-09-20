'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1913",
  name: "Replace \"q\" with \"9\"",
  description: "Replaces every q with 9.",
  run: (value) => String(value).split("q").join("9"),
});
