'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4299",
  name: "Replace \"4\" with \"g\"",
  description: "Replaces every 4 with g.",
  run: (value) => String(value).split("4").join("g"),
});
