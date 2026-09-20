'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3998",
  name: "Replace \"Z\" with \"k\"",
  description: "Replaces every Z with k.",
  run: (value) => String(value).split("Z").join("k"),
});
