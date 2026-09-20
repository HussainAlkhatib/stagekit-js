'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1493",
  name: "Replace \"k\" with \"g\"",
  description: "Replaces every k with g.",
  run: (value) => String(value).split("k").join("g"),
});
