'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1489",
  name: "Replace \"k\" with \"c\"",
  description: "Replaces every k with c.",
  run: (value) => String(value).split("k").join("c"),
});
