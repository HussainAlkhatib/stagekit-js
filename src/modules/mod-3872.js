'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3872",
  name: "Replace \"X\" with \"g\"",
  description: "Replaces every X with g.",
  run: (value) => String(value).split("X").join("g"),
});
