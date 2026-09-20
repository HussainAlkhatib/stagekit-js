'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4242",
  name: "Replace \"3\" with \"k\"",
  description: "Replaces every 3 with k.",
  run: (value) => String(value).split("3").join("k"),
});
