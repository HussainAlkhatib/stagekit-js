'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3799",
  name: "Replace \"V\" with \"4\"",
  description: "Replaces every V with 4.",
  run: (value) => String(value).split("V").join("4"),
});
