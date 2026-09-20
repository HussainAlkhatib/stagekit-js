'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1639",
  name: "Replace \"m\" with \"F\"",
  description: "Replaces every m with F.",
  run: (value) => String(value).split("m").join("F"),
});
