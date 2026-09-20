'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3844",
  name: "Replace \"W\" with \"N\"",
  description: "Replaces every W with N.",
  run: (value) => String(value).split("W").join("N"),
});
