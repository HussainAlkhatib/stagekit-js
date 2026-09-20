'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4604",
  name: "Replace \"9\" with \"g\"",
  description: "Replaces every 9 with g.",
  run: (value) => String(value).split("9").join("g"),
});
