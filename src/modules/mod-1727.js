'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1727",
  name: "Replace \"n\" with \"6\"",
  description: "Replaces every n with 6.",
  run: (value) => String(value).split("n").join("6"),
});
