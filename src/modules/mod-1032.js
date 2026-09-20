'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1032",
  name: "Replace \"e\" with \"g\"",
  description: "Replaces every e with g.",
  run: (value) => String(value).split("e").join("g"),
});
