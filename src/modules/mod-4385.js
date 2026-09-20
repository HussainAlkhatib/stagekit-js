'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4385",
  name: "Replace \"5\" with \"F\"",
  description: "Replaces every 5 with F.",
  run: (value) => String(value).split("5").join("F"),
});
