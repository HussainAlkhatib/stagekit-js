'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3210",
  name: "Replace \"M\" with \"p\"",
  description: "Replaces every M with p.",
  run: (value) => String(value).split("M").join("p"),
});
