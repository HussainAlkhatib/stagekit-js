'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3221",
  name: "Replace \"M\" with \"A\"",
  description: "Replaces every M with A.",
  run: (value) => String(value).split("M").join("A"),
});
