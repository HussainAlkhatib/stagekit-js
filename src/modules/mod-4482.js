'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4482",
  name: "Replace \"7\" with \"g\"",
  description: "Replaces every 7 with g.",
  run: (value) => String(value).split("7").join("g"),
});
