'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1232",
  name: "Replace \"f\" with \"Z\"",
  description: "Replaces every f with Z.",
  run: (value) => String(value).split("f").join("Z"),
});
