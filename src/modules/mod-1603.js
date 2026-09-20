'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1603",
  name: "Replace \"l\" with \"4\"",
  description: "Replaces every l with 4.",
  run: (value) => String(value).split("l").join("4"),
});
