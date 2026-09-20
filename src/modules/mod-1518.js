'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1518",
  name: "Replace \"k\" with \"G\"",
  description: "Replaces every k with G.",
  run: (value) => String(value).split("k").join("G"),
});
