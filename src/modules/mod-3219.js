'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3219",
  name: "Replace \"M\" with \"y\"",
  description: "Replaces every M with y.",
  run: (value) => String(value).split("M").join("y"),
});
