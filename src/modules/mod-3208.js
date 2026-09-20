'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3208",
  name: "Replace \"M\" with \"n\"",
  description: "Replaces every M with n.",
  run: (value) => String(value).split("M").join("n"),
});
