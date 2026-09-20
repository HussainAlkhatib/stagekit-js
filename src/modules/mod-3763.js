'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3763",
  name: "Replace \"V\" with \"t\"",
  description: "Replaces every V with t.",
  run: (value) => String(value).split("V").join("t"),
});
