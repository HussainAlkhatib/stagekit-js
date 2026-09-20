'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1071",
  name: "Replace \"e\" with \"t\"",
  description: "Replaces every e with t.",
  run: (value) => String(value).split("e").join("t"),
});
