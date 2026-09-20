'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3781",
  name: "Replace \"V\" with \"L\"",
  description: "Replaces every V with L.",
  run: (value) => String(value).split("V").join("L"),
});
