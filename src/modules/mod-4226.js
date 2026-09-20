'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4226",
  name: "Replace \"2\" with \"4\"",
  description: "Replaces every 2 with 4.",
  run: (value) => String(value).split("2").join("4"),
});
