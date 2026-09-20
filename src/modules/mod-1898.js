'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1898",
  name: "Replace \"q\" with \"U\"",
  description: "Replaces every q with U.",
  run: (value) => String(value).split("q").join("U"),
});
