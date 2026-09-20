'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3767",
  name: "Replace \"V\" with \"x\"",
  description: "Replaces every V with x.",
  run: (value) => String(value).split("V").join("x"),
});
