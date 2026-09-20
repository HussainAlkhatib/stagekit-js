'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1682",
  name: "Replace \"n\" with \"m\"",
  description: "Replaces every n with m.",
  run: (value) => String(value).split("n").join("m"),
});
