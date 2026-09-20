'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1504",
  name: "Replace \"k\" with \"s\"",
  description: "Replaces every k with s.",
  run: (value) => String(value).split("k").join("s"),
});
