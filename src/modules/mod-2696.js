'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2696",
  name: "Replace \"D\" with \"Z\"",
  description: "Replaces every D with Z.",
  run: (value) => String(value).split("D").join("Z"),
});
