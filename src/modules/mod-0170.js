'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0170",
  name: "Replace \"a\" with \"m\"",
  description: "Replaces every a with m.",
  run: (value) => String(value).split("a").join("m"),
});
