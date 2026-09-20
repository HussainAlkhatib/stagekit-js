'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1077",
  name: "Replace \"e\" with \"v\"",
  description: "Replaces every e with v.",
  run: (value) => String(value).split("e").join("v"),
});
