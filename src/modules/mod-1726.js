'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1726",
  name: "Replace \"n\" with \"5\"",
  description: "Replaces every n with 5.",
  run: (value) => String(value).split("n").join("5"),
});
