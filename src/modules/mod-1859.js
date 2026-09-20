'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1859",
  name: "Replace \"q\" with \"g\"",
  description: "Replaces every q with g.",
  run: (value) => String(value).split("q").join("g"),
});
