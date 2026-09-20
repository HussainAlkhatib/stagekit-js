'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4364",
  name: "Replace \"5\" with \"k\"",
  description: "Replaces every 5 with k.",
  run: (value) => String(value).split("5").join("k"),
});
