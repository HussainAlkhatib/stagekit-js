'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1647",
  name: "Replace \"m\" with \"N\"",
  description: "Replaces every m with N.",
  run: (value) => String(value).split("m").join("N"),
});
