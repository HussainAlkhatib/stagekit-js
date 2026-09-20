'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4116",
  name: "Replace \"1\" with \"g\"",
  description: "Replaces every 1 with g.",
  run: (value) => String(value).split("1").join("g"),
});
