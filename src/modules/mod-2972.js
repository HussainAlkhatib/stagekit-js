'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2972",
  name: "Replace \"I\" with \"v\"",
  description: "Replaces every I with v.",
  run: (value) => String(value).split("I").join("v"),
});
