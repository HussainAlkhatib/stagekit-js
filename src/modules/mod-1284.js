'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1284",
  name: "Replace \"g\" with \"Q\"",
  description: "Replaces every g with Q.",
  run: (value) => String(value).split("g").join("Q"),
});
