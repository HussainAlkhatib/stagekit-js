'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0867",
  name: "Replace \"d\" with \"m\"",
  description: "Replaces every d with m.",
  run: (value) => String(value).split("d").join("m"),
});
