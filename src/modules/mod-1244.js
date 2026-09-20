'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1244",
  name: "Replace \"g\" with \"b\"",
  description: "Replaces every g with b.",
  run: (value) => String(value).split("g").join("b"),
});
