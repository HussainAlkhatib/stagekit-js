'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1047",
  name: "Replace \"e\" with \"l\"",
  description: "Replaces every e with l.",
  run: (value) => String(value).split("e").join("l"),
});
