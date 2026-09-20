'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1269",
  name: "Replace \"g\" with \"B\"",
  description: "Replaces every g with B.",
  run: (value) => String(value).split("g").join("B"),
});
