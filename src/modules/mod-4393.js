'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4393",
  name: "Replace \"5\" with \"N\"",
  description: "Replaces every 5 with N.",
  run: (value) => String(value).split("5").join("N"),
});
