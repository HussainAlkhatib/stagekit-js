'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4379",
  name: "Replace \"5\" with \"z\"",
  description: "Replaces every 5 with z.",
  run: (value) => String(value).split("5").join("z"),
});
