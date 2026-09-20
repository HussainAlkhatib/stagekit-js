'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1268",
  name: "Replace \"g\" with \"A\"",
  description: "Replaces every g with A.",
  run: (value) => String(value).split("g").join("A"),
});
