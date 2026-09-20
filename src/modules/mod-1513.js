'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1513",
  name: "Replace \"k\" with \"B\"",
  description: "Replaces every k with B.",
  run: (value) => String(value).split("k").join("B"),
});
