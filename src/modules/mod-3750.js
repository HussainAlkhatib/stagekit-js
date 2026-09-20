'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3750",
  name: "Replace \"V\" with \"g\"",
  description: "Replaces every V with g.",
  run: (value) => String(value).split("V").join("g"),
});
