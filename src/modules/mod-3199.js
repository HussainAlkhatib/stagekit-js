'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3199",
  name: "Replace \"M\" with \"e\"",
  description: "Replaces every M with e.",
  run: (value) => String(value).split("M").join("e"),
});
