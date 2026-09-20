'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3788",
  name: "Replace \"V\" with \"S\"",
  description: "Replaces every V with S.",
  run: (value) => String(value).split("V").join("S"),
});
