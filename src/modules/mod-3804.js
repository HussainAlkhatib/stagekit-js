'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3804",
  name: "Replace \"V\" with \"9\"",
  description: "Replaces every V with 9.",
  run: (value) => String(value).split("V").join("9"),
});
