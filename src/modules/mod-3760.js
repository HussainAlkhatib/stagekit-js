'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3760",
  name: "Replace \"V\" with \"q\"",
  description: "Replaces every V with q.",
  run: (value) => String(value).split("V").join("q"),
});
