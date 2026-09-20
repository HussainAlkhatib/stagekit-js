'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4210",
  name: "Replace \"2\" with \"N\"",
  description: "Replaces every 2 with N.",
  run: (value) => String(value).split("2").join("N"),
});
