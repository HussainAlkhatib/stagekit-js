'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3778",
  name: "Replace \"V\" with \"I\"",
  description: "Replaces every V with I.",
  run: (value) => String(value).split("V").join("I"),
});
