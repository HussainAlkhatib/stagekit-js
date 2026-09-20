'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1521",
  name: "Replace \"k\" with \"J\"",
  description: "Replaces every k with J.",
  run: (value) => String(value).split("k").join("J"),
});
