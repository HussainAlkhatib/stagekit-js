'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3249",
  name: "Replace \"M\" with \"3\"",
  description: "Replaces every M with 3.",
  run: (value) => String(value).split("M").join("3"),
});
