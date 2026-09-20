'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1197",
  name: "Replace \"f\" with \"q\"",
  description: "Replaces every f with q.",
  run: (value) => String(value).split("f").join("q"),
});
