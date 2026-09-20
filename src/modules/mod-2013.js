'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2013",
  name: "Replace \"s\" with \"N\"",
  description: "Replaces every s with N.",
  run: (value) => String(value).split("s").join("N"),
});
