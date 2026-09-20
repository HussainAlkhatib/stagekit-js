'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2286",
  name: "Replace \"x\" with \"g\"",
  description: "Replaces every x with g.",
  run: (value) => String(value).split("x").join("g"),
});
