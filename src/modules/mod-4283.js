'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4283",
  name: "Replace \"3\" with \"Z\"",
  description: "Replaces every 3 with Z.",
  run: (value) => String(value).split("3").join("Z"),
});
