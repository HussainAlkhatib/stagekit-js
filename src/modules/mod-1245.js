'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1245",
  name: "Replace \"g\" with \"c\"",
  description: "Replaces every g with c.",
  run: (value) => String(value).split("g").join("c"),
});
