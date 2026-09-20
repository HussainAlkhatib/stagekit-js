'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1262",
  name: "Replace \"g\" with \"u\"",
  description: "Replaces every g with u.",
  run: (value) => String(value).split("g").join("u"),
});
