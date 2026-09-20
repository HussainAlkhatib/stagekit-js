'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0618",
  name: "Replace \"b\" with \"Z\"",
  description: "Replaces every b with Z.",
  run: (value) => String(value).split("b").join("Z"),
});
