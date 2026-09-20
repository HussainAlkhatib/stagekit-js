'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2414",
  name: "Replace \"z\" with \"m\"",
  description: "Replaces every z with m.",
  run: (value) => String(value).split("z").join("m"),
});
