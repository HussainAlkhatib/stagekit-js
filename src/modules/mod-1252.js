'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1252",
  name: "Replace \"g\" with \"k\"",
  description: "Replaces every g with k.",
  run: (value) => String(value).split("g").join("k"),
});
