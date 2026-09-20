'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1181",
  name: "Replace \"e\" with \"9\"",
  description: "Replaces every e with 9.",
  run: (value) => String(value).split("e").join("9"),
});
