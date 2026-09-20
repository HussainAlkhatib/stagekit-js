'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3225",
  name: "Replace \"M\" with \"E\"",
  description: "Replaces every M with E.",
  run: (value) => String(value).split("M").join("E"),
});
