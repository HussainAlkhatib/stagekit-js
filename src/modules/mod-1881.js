'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1881",
  name: "Replace \"q\" with \"D\"",
  description: "Replaces every q with D.",
  run: (value) => String(value).split("q").join("D"),
});
