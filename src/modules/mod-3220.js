'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3220",
  name: "Replace \"M\" with \"z\"",
  description: "Replaces every M with z.",
  run: (value) => String(value).split("M").join("z"),
});
