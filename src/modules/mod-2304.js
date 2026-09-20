'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2304",
  name: "Replace \"x\" with \"z\"",
  description: "Replaces every x with z.",
  run: (value) => String(value).split("x").join("z"),
});
