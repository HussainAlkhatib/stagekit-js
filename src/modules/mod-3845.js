'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3845",
  name: "Replace \"W\" with \"O\"",
  description: "Replaces every W with O.",
  run: (value) => String(value).split("W").join("O"),
});
