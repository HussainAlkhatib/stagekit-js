'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1873",
  name: "Replace \"q\" with \"v\"",
  description: "Replaces every q with v.",
  run: (value) => String(value).split("q").join("v"),
});
