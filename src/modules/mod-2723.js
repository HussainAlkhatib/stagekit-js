'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2723",
  name: "Replace \"E\" with \"q\"",
  description: "Replaces every E with q.",
  run: (value) => String(value).split("E").join("q"),
});
