'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0405",
  name: "Replace \"a\" with \"Z\"",
  description: "Replaces every a with Z.",
  run: (value) => String(value).split("a").join("Z"),
});
