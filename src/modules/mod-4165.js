'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4165",
  name: "Replace \"1\" with \"4\"",
  description: "Replaces every 1 with 4.",
  run: (value) => String(value).split("1").join("4"),
});
