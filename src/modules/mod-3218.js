'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3218",
  name: "Replace \"M\" with \"x\"",
  description: "Replaces every M with x.",
  run: (value) => String(value).split("M").join("x"),
});
