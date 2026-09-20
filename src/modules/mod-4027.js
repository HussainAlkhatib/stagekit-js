'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4027",
  name: "Replace \"Z\" with \"N\"",
  description: "Replaces every Z with N.",
  run: (value) => String(value).split("Z").join("N"),
});
