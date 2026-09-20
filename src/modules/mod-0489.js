'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0489",
  name: "Replace \"b\" with \"l\"",
  description: "Replaces every b with l.",
  run: (value) => String(value).split("b").join("l"),
});
