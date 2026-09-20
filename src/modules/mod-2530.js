'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2530",
  name: "Replace \"B\" with \"g\"",
  description: "Replaces every B with g.",
  run: (value) => String(value).split("B").join("g"),
});
