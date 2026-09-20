'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3770",
  name: "Replace \"V\" with \"A\"",
  description: "Replaces every V with A.",
  run: (value) => String(value).split("V").join("A"),
});
