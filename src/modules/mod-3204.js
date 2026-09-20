'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3204",
  name: "Replace \"M\" with \"j\"",
  description: "Replaces every M with j.",
  run: (value) => String(value).split("M").join("j"),
});
