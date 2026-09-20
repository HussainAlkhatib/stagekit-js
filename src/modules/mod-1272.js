'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1272",
  name: "Replace \"g\" with \"E\"",
  description: "Replaces every g with E.",
  run: (value) => String(value).split("g").join("E"),
});
