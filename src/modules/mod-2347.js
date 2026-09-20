'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2347",
  name: "Replace \"y\" with \"g\"",
  description: "Replaces every y with g.",
  run: (value) => String(value).split("y").join("g"),
});
