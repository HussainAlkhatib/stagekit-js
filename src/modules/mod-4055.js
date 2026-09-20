'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4055",
  name: "Replace \"0\" with \"g\"",
  description: "Replaces every 0 with g.",
  run: (value) => String(value).split("0").join("g"),
});
