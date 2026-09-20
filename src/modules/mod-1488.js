'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1488",
  name: "Replace \"k\" with \"b\"",
  description: "Replaces every k with b.",
  run: (value) => String(value).split("k").join("b"),
});
