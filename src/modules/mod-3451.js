'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3451",
  name: "Replace \"Q\" with \"m\"",
  description: "Replaces every Q with m.",
  run: (value) => String(value).split("Q").join("m"),
});
