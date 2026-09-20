'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2806",
  name: "Replace \"F\" with \"N\"",
  description: "Replaces every F with N.",
  run: (value) => String(value).split("F").join("N"),
});
