'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3855",
  name: "Replace \"W\" with \"Z\"",
  description: "Replaces every W with Z.",
  run: (value) => String(value).split("W").join("Z"),
});
