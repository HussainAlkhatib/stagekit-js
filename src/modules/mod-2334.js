'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2334",
  name: "Replace \"x\" with \"3\"",
  description: "Replaces every x with 3.",
  run: (value) => String(value).split("x").join("3"),
});
