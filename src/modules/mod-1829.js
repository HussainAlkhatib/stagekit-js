'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1829",
  name: "Replace \"p\" with \"M\"",
  description: "Replaces every p with M.",
  run: (value) => String(value).split("p").join("M"),
});
