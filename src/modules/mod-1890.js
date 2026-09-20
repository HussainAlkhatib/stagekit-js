'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1890",
  name: "Replace \"q\" with \"M\"",
  description: "Replaces every q with M.",
  run: (value) => String(value).split("q").join("M"),
});
