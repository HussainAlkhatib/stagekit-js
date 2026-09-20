'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1680",
  name: "Replace \"n\" with \"k\"",
  description: "Replaces every n with k.",
  run: (value) => String(value).split("n").join("k"),
});
