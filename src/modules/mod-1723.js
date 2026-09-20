'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1723",
  name: "Replace \"n\" with \"2\"",
  description: "Replaces every n with 2.",
  run: (value) => String(value).split("n").join("2"),
});
