'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3798",
  name: "Replace \"V\" with \"3\"",
  description: "Replaces every V with 3.",
  run: (value) => String(value).split("V").join("3"),
});
