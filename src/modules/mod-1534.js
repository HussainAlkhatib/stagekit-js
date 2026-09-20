'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1534",
  name: "Replace \"k\" with \"W\"",
  description: "Replaces every k with W.",
  run: (value) => String(value).split("k").join("W"),
});
