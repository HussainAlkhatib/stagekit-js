'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1508",
  name: "Replace \"k\" with \"w\"",
  description: "Replaces every k with w.",
  run: (value) => String(value).split("k").join("w"),
});
