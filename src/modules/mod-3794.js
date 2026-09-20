'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3794",
  name: "Replace \"V\" with \"Z\"",
  description: "Replaces every V with Z.",
  run: (value) => String(value).split("V").join("Z"),
});
