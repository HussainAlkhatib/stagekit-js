'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3242",
  name: "Replace \"M\" with \"W\"",
  description: "Replaces every M with W.",
  run: (value) => String(value).split("M").join("W"),
});
