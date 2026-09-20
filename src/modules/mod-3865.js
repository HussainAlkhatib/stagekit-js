'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3865",
  name: "Replace \"W\" with \"9\"",
  description: "Replaces every W with 9.",
  run: (value) => String(value).split("W").join("9"),
});
