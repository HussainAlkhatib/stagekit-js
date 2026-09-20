'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2313",
  name: "Replace \"x\" with \"I\"",
  description: "Replaces every x with I.",
  run: (value) => String(value).split("x").join("I"),
});
