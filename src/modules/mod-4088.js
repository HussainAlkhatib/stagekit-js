'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4088",
  name: "Replace \"0\" with \"N\"",
  description: "Replaces every 0 with N.",
  run: (value) => String(value).split("0").join("N"),
});
