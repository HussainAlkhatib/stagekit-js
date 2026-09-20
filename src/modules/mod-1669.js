'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1669",
  name: "Replace \"m\" with \"9\"",
  description: "Replaces every m with 9.",
  run: (value) => String(value).split("m").join("9"),
});
