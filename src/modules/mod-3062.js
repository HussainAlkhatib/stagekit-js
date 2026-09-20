'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3062",
  name: "Replace \"J\" with \"Z\"",
  description: "Replaces every J with Z.",
  run: (value) => String(value).split("J").join("Z"),
});
