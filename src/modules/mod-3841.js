'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3841",
  name: "Replace \"W\" with \"K\"",
  description: "Replaces every W with K.",
  run: (value) => String(value).split("W").join("K"),
});
