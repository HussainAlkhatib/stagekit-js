'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3234",
  name: "Replace \"M\" with \"O\"",
  description: "Replaces every M with O.",
  run: (value) => String(value).split("M").join("O"),
});
