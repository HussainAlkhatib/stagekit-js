'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3817",
  name: "Replace \"W\" with \"m\"",
  description: "Replaces every W with m.",
  run: (value) => String(value).split("W").join("m"),
});
