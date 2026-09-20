'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2653",
  name: "Replace \"D\" with \"h\"",
  description: "Replaces every D with h.",
  run: (value) => String(value).split("D").join("h"),
});
