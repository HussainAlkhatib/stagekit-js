'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2656",
  name: "Replace \"D\" with \"k\"",
  description: "Replaces every D with k.",
  run: (value) => String(value).split("D").join("k"),
});
