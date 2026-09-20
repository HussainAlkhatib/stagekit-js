'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1860",
  name: "Replace \"q\" with \"h\"",
  description: "Replaces every q with h.",
  run: (value) => String(value).split("q").join("h"),
});
