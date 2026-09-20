'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2535",
  name: "Replace \"B\" with \"l\"",
  description: "Replaces every B with l.",
  run: (value) => String(value).split("B").join("l"),
});
