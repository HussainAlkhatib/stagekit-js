'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3751",
  name: "Replace \"V\" with \"h\"",
  description: "Replaces every V with h.",
  run: (value) => String(value).split("V").join("h"),
});
