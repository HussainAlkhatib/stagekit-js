'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1724",
  name: "Replace \"n\" with \"3\"",
  description: "Replaces every n with 3.",
  run: (value) => String(value).split("n").join("3"),
});
