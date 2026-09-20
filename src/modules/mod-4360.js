'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4360",
  name: "Replace \"5\" with \"g\"",
  description: "Replaces every 5 with g.",
  run: (value) => String(value).split("5").join("g"),
});
