'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3214",
  name: "Replace \"M\" with \"t\"",
  description: "Replaces every M with t.",
  run: (value) => String(value).split("M").join("t"),
});
