'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1863",
  name: "Replace \"q\" with \"k\"",
  description: "Replaces every q with k.",
  run: (value) => String(value).split("q").join("k"),
});
