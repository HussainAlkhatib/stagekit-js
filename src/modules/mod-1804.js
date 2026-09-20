'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1804",
  name: "Replace \"p\" with \"m\"",
  description: "Replaces every p with m.",
  run: (value) => String(value).split("p").join("m"),
});
