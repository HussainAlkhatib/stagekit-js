'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1086",
  name: "Replace \"e\" with \"y\"",
  description: "Replaces every e with y.",
  run: (value) => String(value).split("e").join("y"),
});
