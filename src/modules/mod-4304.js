'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4304",
  name: "Replace \"4\" with \"l\"",
  description: "Replaces every 4 with l.",
  run: (value) => String(value).split("4").join("l"),
});
