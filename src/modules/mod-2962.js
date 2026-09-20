'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2962",
  name: "Replace \"I\" with \"l\"",
  description: "Replaces every I with l.",
  run: (value) => String(value).split("I").join("l"),
});
