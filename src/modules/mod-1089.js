'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1089",
  name: "Replace \"e\" with \"z\"",
  description: "Replaces every e with z.",
  run: (value) => String(value).split("e").join("z"),
});
