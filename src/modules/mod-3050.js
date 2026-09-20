'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3050",
  name: "Replace \"J\" with \"N\"",
  description: "Replaces every J with N.",
  run: (value) => String(value).split("J").join("N"),
});
