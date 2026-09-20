'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2469",
  name: "Replace \"A\" with \"g\"",
  description: "Replaces every A with g.",
  run: (value) => String(value).split("A").join("g"),
});
