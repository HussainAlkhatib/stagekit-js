'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1883",
  name: "Replace \"q\" with \"F\"",
  description: "Replaces every q with F.",
  run: (value) => String(value).split("q").join("F"),
});
