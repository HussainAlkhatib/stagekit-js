'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2379",
  name: "Replace \"y\" with \"N\"",
  description: "Replaces every y with N.",
  run: (value) => String(value).split("y").join("N"),
});
