'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1531",
  name: "Replace \"k\" with \"T\"",
  description: "Replaces every k with T.",
  run: (value) => String(value).split("k").join("T"),
});
