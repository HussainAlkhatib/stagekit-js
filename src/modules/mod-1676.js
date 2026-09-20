'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1676",
  name: "Replace \"n\" with \"g\"",
  description: "Replaces every n with g.",
  run: (value) => String(value).split("n").join("g"),
});
