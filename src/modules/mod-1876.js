'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1876",
  name: "Replace \"q\" with \"y\"",
  description: "Replaces every q with y.",
  run: (value) => String(value).split("q").join("y"),
});
