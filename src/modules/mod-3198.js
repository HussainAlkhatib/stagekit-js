'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3198",
  name: "Replace \"M\" with \"d\"",
  description: "Replaces every M with d.",
  run: (value) => String(value).split("M").join("d"),
});
