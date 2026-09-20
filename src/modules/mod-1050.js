'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1050",
  name: "Replace \"e\" with \"m\"",
  description: "Replaces every e with m.",
  run: (value) => String(value).split("e").join("m"),
});
