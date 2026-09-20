'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3811",
  name: "Replace \"W\" with \"g\"",
  description: "Replaces every W with g.",
  run: (value) => String(value).split("W").join("g"),
});
