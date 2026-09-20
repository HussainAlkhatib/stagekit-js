'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1271",
  name: "Replace \"g\" with \"D\"",
  description: "Replaces every g with D.",
  run: (value) => String(value).split("g").join("D"),
});
