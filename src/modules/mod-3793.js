'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3793",
  name: "Replace \"V\" with \"Y\"",
  description: "Replaces every V with Y.",
  run: (value) => String(value).split("V").join("Y"),
});
