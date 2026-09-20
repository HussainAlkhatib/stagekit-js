'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4539",
  name: "Replace \"8\" with \"c\"",
  description: "Replaces every 8 with c.",
  run: (value) => String(value).split("8").join("c"),
});
