'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2291",
  name: "Replace \"x\" with \"l\"",
  description: "Replaces every x with l.",
  run: (value) => String(value).split("x").join("l"),
});
