'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2289",
  name: "Replace \"x\" with \"j\"",
  description: "Replaces every x with j.",
  run: (value) => String(value).split("x").join("j"),
});
