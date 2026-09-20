'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3340",
  name: "Replace \"O\" with \"x\"",
  description: "Replaces every O with x.",
  run: (value) => String(value).split("O").join("x"),
});
