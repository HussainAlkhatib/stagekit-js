'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4543",
  name: "Replace \"8\" with \"g\"",
  description: "Replaces every 8 with g.",
  run: (value) => String(value).split("8").join("g"),
});
