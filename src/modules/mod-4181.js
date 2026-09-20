'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4181",
  name: "Replace \"2\" with \"k\"",
  description: "Replaces every 2 with k.",
  run: (value) => String(value).split("2").join("k"),
});
