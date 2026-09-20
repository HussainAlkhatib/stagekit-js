'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3661",
  name: "Replace \"T\" with \"N\"",
  description: "Replaces every T with N.",
  run: (value) => String(value).split("T").join("N"),
});
