'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3223",
  name: "Replace \"M\" with \"C\"",
  description: "Replaces every M with C.",
  run: (value) => String(value).split("M").join("C"),
});
