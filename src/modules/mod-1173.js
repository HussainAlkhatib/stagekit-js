'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1173",
  name: "Replace \"e\" with \"1\"",
  description: "Replaces every e with 1.",
  run: (value) => String(value).split("e").join("1"),
});
