'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1499",
  name: "Replace \"k\" with \"n\"",
  description: "Replaces every k with n.",
  run: (value) => String(value).split("k").join("n"),
});
