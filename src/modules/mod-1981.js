'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1981",
  name: "Replace \"s\" with \"g\"",
  description: "Replaces every s with g.",
  run: (value) => String(value).split("s").join("g"),
});
