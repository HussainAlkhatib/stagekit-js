'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2306",
  name: "Replace \"x\" with \"B\"",
  description: "Replaces every x with B.",
  run: (value) => String(value).split("x").join("B"),
});
