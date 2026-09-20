'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3470",
  name: "Replace \"Q\" with \"F\"",
  description: "Replaces every Q with F.",
  run: (value) => String(value).split("Q").join("F"),
});
