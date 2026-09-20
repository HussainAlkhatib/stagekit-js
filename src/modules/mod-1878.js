'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1878",
  name: "Replace \"q\" with \"A\"",
  description: "Replaces every q with A.",
  run: (value) => String(value).split("q").join("A"),
});
