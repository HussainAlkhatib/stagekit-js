'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0469",
  name: "Replace \"b\" with \"g\"",
  description: "Replaces every b with g.",
  run: (value) => String(value).split("b").join("g"),
});
