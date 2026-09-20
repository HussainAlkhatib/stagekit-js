'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1554",
  name: "Replace \"l\" with \"g\"",
  description: "Replaces every l with g.",
  run: (value) => String(value).split("l").join("g"),
});
