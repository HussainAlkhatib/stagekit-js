'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4318",
  name: "Replace \"4\" with \"z\"",
  description: "Replaces every 4 with z.",
  run: (value) => String(value).split("4").join("z"),
});
