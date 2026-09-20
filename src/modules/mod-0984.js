'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0984",
  name: "Replace \"d\" with \"Z\"",
  description: "Replaces every d with Z.",
  run: (value) => String(value).split("d").join("Z"),
});
