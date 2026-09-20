'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1889",
  name: "Replace \"q\" with \"L\"",
  description: "Replaces every q with L.",
  run: (value) => String(value).split("q").join("L"),
});
