'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2048",
  name: "Replace \"t\" with \"m\"",
  description: "Replaces every t with m.",
  run: (value) => String(value).split("t").join("m"),
});
