'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3831",
  name: "Replace \"W\" with \"A\"",
  description: "Replaces every W with A.",
  run: (value) => String(value).split("W").join("A"),
});
