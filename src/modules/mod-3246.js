'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3246",
  name: "Replace \"M\" with \"0\"",
  description: "Replaces every M with 0.",
  run: (value) => String(value).split("M").join("0"),
});
