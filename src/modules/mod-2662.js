'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2662",
  name: "Replace \"D\" with \"q\"",
  description: "Replaces every D with q.",
  run: (value) => String(value).split("D").join("q"),
});
