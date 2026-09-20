'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2307",
  name: "Replace \"x\" with \"C\"",
  description: "Replaces every x with C.",
  run: (value) => String(value).split("x").join("C"),
});
