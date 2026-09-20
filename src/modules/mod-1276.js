'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1276",
  name: "Replace \"g\" with \"I\"",
  description: "Replaces every g with I.",
  run: (value) => String(value).split("g").join("I"),
});
