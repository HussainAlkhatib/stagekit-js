'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1533",
  name: "Replace \"k\" with \"V\"",
  description: "Replaces every k with V.",
  run: (value) => String(value).split("k").join("V"),
});
