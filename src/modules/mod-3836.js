'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3836",
  name: "Replace \"W\" with \"F\"",
  description: "Replaces every W with F.",
  run: (value) => String(value).split("W").join("F"),
});
