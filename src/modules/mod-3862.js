'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3862",
  name: "Replace \"W\" with \"6\"",
  description: "Replaces every W with 6.",
  run: (value) => String(value).split("W").join("6"),
});
