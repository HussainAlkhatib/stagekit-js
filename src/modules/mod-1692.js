'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1692",
  name: "Replace \"n\" with \"x\"",
  description: "Replaces every n with x.",
  run: (value) => String(value).split("n").join("x"),
});
