'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3201",
  name: "Replace \"M\" with \"g\"",
  description: "Replaces every M with g.",
  run: (value) => String(value).split("M").join("g"),
});
