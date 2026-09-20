'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2974",
  name: "Replace \"I\" with \"x\"",
  description: "Replaces every I with x.",
  run: (value) => String(value).split("I").join("x"),
});
