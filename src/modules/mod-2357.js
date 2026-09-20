'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2357",
  name: "Replace \"y\" with \"q\"",
  description: "Replaces every y with q.",
  run: (value) => String(value).split("y").join("q"),
});
