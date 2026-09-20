'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1128",
  name: "Replace \"e\" with \"M\"",
  description: "Replaces every e with M.",
  run: (value) => String(value).split("e").join("M"),
});
