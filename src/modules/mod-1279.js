'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1279",
  name: "Replace \"g\" with \"L\"",
  description: "Replaces every g with L.",
  run: (value) => String(value).split("g").join("L"),
});
