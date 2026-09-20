'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2135",
  name: "Replace \"u\" with \"N\"",
  description: "Replaces every u with N.",
  run: (value) => String(value).split("u").join("N"),
});
