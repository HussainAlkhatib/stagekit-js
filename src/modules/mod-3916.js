'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3916",
  name: "Replace \"X\" with \"Z\"",
  description: "Replaces every X with Z.",
  run: (value) => String(value).split("X").join("Z"),
});
