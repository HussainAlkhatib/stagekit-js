'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3812",
  name: "Replace \"W\" with \"h\"",
  description: "Replaces every W with h.",
  run: (value) => String(value).split("W").join("h"),
});
