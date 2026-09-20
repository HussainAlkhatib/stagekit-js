'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1637",
  name: "Replace \"m\" with \"D\"",
  description: "Replaces every m with D.",
  run: (value) => String(value).split("m").join("D"),
});
