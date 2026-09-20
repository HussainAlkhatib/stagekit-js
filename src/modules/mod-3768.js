'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3768",
  name: "Replace \"V\" with \"y\"",
  description: "Replaces every V with y.",
  run: (value) => String(value).split("V").join("y"),
});
